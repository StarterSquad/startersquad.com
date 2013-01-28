require 'include/sass_functions.rb'

#
# SASS and Compass configuration
#

compass_config do |config|
  config.line_comments   = false
  config.output_style    = :expanded
  config.relative_assets = true
end

#
# HAML configuration
#

set :haml, {
  attr_wrapper: '"',
  format:       :html5,
}

#
# Middleman configuration
#

activate :deploy do |deploy|
  deploy.clean  = true
  deploy.method = :git
end

ignore 'images/inline*/*'
ignore 'images/sprite*/*'
ignore 'javascripts/plugins/*'
