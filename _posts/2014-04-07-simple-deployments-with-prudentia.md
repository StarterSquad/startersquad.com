---
layout: post
title: Automated deployment with Prudentia
author: Tiziano Perrucci
tags:
- continuous delivery
- development
---

A few months ago Iwein wrote an article about [Continuous Deployment](/blog/getting-ready-for-continuous-delivery/)
and what it takes to get there. It's about time
to get practical about that. How do you do it? It's really simple. In this howto we'll show you how to deploy a
simple Jekyll application to Digital Ocean with Prudentia. But first let me explain the example a bit better.

## Let's pick a real example
We'll take a very simple example: our website https://github.com/StarterSquad/startersquad.github.com.

##Step 1. Write your deployment scripts
We already did that for you (and for us :)).

The deployment scripts are actually [Ansible playbooks](http://docs.ansible.com/playbooks.html) with a
few simple tweaks. That means that if you have already existing playbooks they can easily used by Prudentia.

Let's dive right in and checkout the repository. Once you've cloned it, you will notice a top level folder called `deployment`.

![Prudentia deployment folder structure](/assets/images/website-deployment.png)

You will also notice two sub-folders: `boxes` and `components`. This is only a logical division. I like to think about Prudentia
as a toolkit that helps you to deploy a [service oriented architecture](http://en.wikipedia.org/wiki/Service-oriented_architecture)
enabling the distribution of your _components_ to many _boxes_ or only one.

The `website` box will set some variables and use the `jekyll` and `proxy` components. We'll have install the following components:

* Git: used to checkout the GitHub repository on the machine
* Ruby and [Jekyll](http://jekyllrb.com/) (our website is powered by Jekyll which needs Ruby …)
* Nginx: proxy that will serve all the http requests

##Step 2. Install Prudentia
Make sure you satisfy the [prerequisites](https://github.com/StarterSquad/prudentia#prerequisites) and
then [install it](https://github.com/StarterSquad/prudentia#install).

Running `$ prudentia` will start the CLI and it will prompt you to select one of the available providers. A provider is
the underlying system that will instruct Ansible how to run the playbook on a target Prudentia box.

Currently there are three type of providers: `ssh`, `vagrant` and `digital-ocean`. For our website we use Digital Ocean
because that is where it is hosted right now.

##Step 3. Create a box

There is a shortcut to start Prudentia using directly one of the available providers and is just passing the provider name
as parameter:

`$ prudentia digital-ocean`

The first time you run this provider it will ask for the API credentials: client id and api key. Once you enter them Prudentia
will remember and not ask you again.

Note: *make sure that all the ssh keys of your organizations are configured correctly in Digital Ocean*.

Now create a droplet - Digital Oceans uses yet another term for a machine, or box in Prudentia jargon (I hope you are not too confused):

`(Prudentia > DigitalOcean) register`

The register action will add the box information to a registry so it can be referenced later in other action
using the box name you've chosen. You will be prompted with few questions:

* `Specify the playbook path` is the absolute path to your box, so is the absolute path of the file `website.yml`
* `Specify the box name` the host name defined in the playbook will be suggested as default, press enter to use the default otherwise specify a different one
* `Specify the remote user` the remote use that should be created on the remote box, default is your local current user
* `Specify the image` and here the CLI comes handy: you need to chose the id of the base image that the box will be built from. In general StarterSquad uses the Ubuntu Precise as default otherwise pick another id from the available images on Digital Ocean
* `Specify the size` chose how big is your box, unless the default 1GB size doesn't suit you
* `Specify the keys` decide who is gonna access you box listing all the keys id, or just grant all your registered ssh keys
* `Specify the region` choose in which data center your box should be installed

Lots of decisions to take, but luckily the tool provides some useful
defaults and information to make it easy for you.

At the end of this process Prudentia will automatically spin up the box and will wait for it to be running. After the creation
the remote user that you specified will be created in his own group, it will configure the ssh keys for
that user, ensure to have it in the sudo group and remove password prompting for sudo users. Less work for you.

The sudo configuration will make executing sudo commands from playbook working seamlessly. From here it gets even simpler.

##Step 4. Deploy

Simply run: `(Prudentia > DigitalOcean) provision ssq-website` or whatever other box name you've chosen.

This will invoke Ansible and run all the tasks defined in the playbook in sequentially. At the end of the provisioning
process you should be able to access the our homepage.

##Step 5. Connect to an existing box with SSH

Connecting via SSH is simple as well: just use a different provider. If you have an existing server and is accessible
through SSH you can provision it in exactly the same way. The box registering
process is easier as described in the [Prudentia Readme](https://github.com/StarterSquad/prudentia#start-the-cli-and-use-the-ssh-provider).

#Step 6. You're done
So what did you do? You just:

1. got introduced to Ansible playbooks and the Digital Ocean provider
2. provisioned a brand new shiny Digital Ocean box (droplet, machine) after registering it
3. deployed an app there in a single command, and
4. you can do it again and again in a predictable manner

Of course you don't want to deploy the startersquad website to production (you might, but that would be weird). So you
should change the deployment description to your needs. There is some documentation on prudentia, reach out if you need help
finding the information you need.

Later we might tell you about phoenixes and other mythological creatures. This will do for now. Happy hacking! Let us
know if you run into trouble!
