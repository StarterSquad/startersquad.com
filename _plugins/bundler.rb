Encoding.default_external = "UTF-8"

require "rubygems"
require "bundler/setup"
Bundler.require(:default)

Sprockets.append_path Dir.pwd + '/_assets/vendor/'
