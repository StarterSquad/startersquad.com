require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

desc 'Compile site assets'
task :compile do
  require 'sass/plugin'
  Compass.add_configuration({
    css_dir:         '_/css',
    fonts_dir:       '_/fonts',
    images_dir:      '_/images',
    javascripts_dir: '_/js',
    sass_dir:        '_/sass',

    line_comments:   false,
    output_style:    :compressed,
    relative_assets: true,
  }, 'whatever')

  Compass.configuration.asset_cache_buster :none
  Compass.compiler.run
end