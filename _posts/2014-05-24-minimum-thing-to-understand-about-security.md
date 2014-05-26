---
layout: post
title: 'The bare minimum everyone should know about password security'
author: Iwein Fuld
tags:
- development
- security
---



Lot's has been said about password security, but still the majority of people, developers and users alike are doing it wrong. Here are a few notes that should help you not make a fool of yourself. I'll talk about keeping your password safe, password length, what characters you should use, password prevalidation, storage, validation and communication. Sounds like a lot, but I'll keep it really simple.

About security in general
-----------
There is no such thing as airtight security. The system I'm working on now was assembled by people I don't know and the software I'm running I haven't reviewed myself. It could easily be that someone put a keylogger in the hardware of my keyboard and can see everything I type. That would require someone to have targeted me before I bought this system and installed this software, but it is by no means unthinkable. Maybe the NSA actually forces Apple to do this (would they?). To keep it simple (I promised!) if you have a locksmith install your lock, there is no way you can be absolutely sure that he doesn't have a copy of the key hidden at home. We choose to live with risks like this out of pragmatism, and that's fine. What's not fine is to take unnecessary risks, or worse, be forced to do so by the services you use. The Apple genius asking for your password. No, that's not OK.

Keep 'em safe
-------
If you use a password, don't share it with anyone, or if you have to, make sure that key only unlocks a single door. Some people have trouble remembering passwords (like me). For this there are key store tools like [1Password](https://agilebits.com/onepassword) or [Lastpass](https://lastpass.com/) to keep your passwords securely locked away,
only accessible with the master password (don't forget that one). A sensible pragmatic solution is also to write your password on a piece of paper, which is arguably more secure than trusting the developers of your key store with the responsibility of keeping 'em safe.

###Never reuse
If you reuse a password, you're trusting person X with the keys you have of person Y's appartment. This is not nice to do without person Y's permission, and if the key gets stolen, everybody needs to change their locks. Changing a password is much quicker than changing a lock in most cases, but it can add up if you have hundreds of accounts like me.

Strong passwords
--------------
The strength of a password is related to the amount of effort it takes to guess it. This effort is roughly related to the number of possible alternatives there are. This is a bit tricky, because if you use dictionary words for example a hacker might get lucky by trying only dictionary words (they do this actually). 'oJxx6s3Cz;5S' might be a stronger password than 'The Quick Brown Fox Jumps Over The Lazy Dog' because the latter sentence, albeit long is more susceptible to a lucky guess.

### Length, possibilities and entropy
Given length l in characters, and n the number of options per character, the formula for the number of options is (n)^l. But, in certain cases, n is not the same for each position (for example if you use dictionary words). The number of options is also sometimes called entropy. There has been [some debate](http://xkcd.com/936/) about whether you should pick random (shorter) strings or longer sentences,
and the real answer is: it depends. There is a more detailed [article on password security on the packetizer
blog](http://www.packetizer.com/security/pwgen/). If you
use only letters,
at random, the entropy of a password is (26)^l, if you use full ASCII the entropy is (256)^l. This means that a 17 character letters only password has roughly the same entropy as a 10 character full ASCII one. But if you start using real sentences it gets way worse. If you need to form real words, the amount of options is usually below 10 per character, so you'll need a 25 character sentence to beat a 10 character random ASCII password. I can't do that, so I started using a password generator + key store.

If you're just a user, this is what you need to do:

- generate random passwords as long as you can for each different account that you create,
- use a key store, or write them down on a piece of paper which you carry with you at all times,
- if a service doesn't accept your password as 'proper' use a different service,
- never fill in a password if the form isn't served with https.

The rest of the post goes a bit more into the development details, but I'll try to keep it readable for non-techies (I promised).

###Password prevalidation
Many services use prevalidation: your password has to have 1 capital, 2 digits and 3 klingon symbols. This is stupid. Why? Well all it does is reduce the number of options, and make it possible for hackers to avoid testing certain passwords. 'three blind mice' is a stronger password than '3 Blind mice' so why would anyone consider the first one of lower quality? (Both those passwords are crap by the way). The worst kind of prevalidation is to give the password a maximum length. Of course you might want to avoid 60 megabyte passwords for practical reasons, but that is usually already sorted by the webservers maximum request size limits, so as a password prevalidator you don't need to worry about that. Minimum length prevalidation is less harmful, but as I demonstrated, the length of a password isn't _everything_ and all you're technically doing is removing the first chunk of options from the hacker's search space. That will just get him faster to the easy passwords that you do allow as a developer. **Never do any kind of prevalidation on passwords.**

Transmitting and storing passwords
----------------
If a user picked a password, it should never be visible to another human soul. Hence:

1. all traffic containing passwords must be encrypted (https will do),
2. passwords may never be logged (this means you should be careful with the default behavior for printing objects, like http post requests or your domain data),
3. passwords must be stored hashed and salted.

This is trickier than it sounds, that's why users should never reuse passwords. But what does it mean? If you don't
do 1., anyone can intercept the traffic between a user's computer and the server and just read the passwords right there. If the passwords are logged (2.), anyone with access to the web server has access to all the passwords as well. The same
goes for 3. only there the hacker would need access to the database (which is usually an extra step).

If you stick to these ground rules when making up passwords, filling them into forms and when dealing with passwords of others; the world will be a better place and you'll look smart and responsible.
