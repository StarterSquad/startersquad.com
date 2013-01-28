module Sass::Script::Functions

  def in(list, val)
    Sass::Script::Bool.new(list.to_a.find_index(val) != nil)
  end

  declare :in, :args => [:list, :val]

end

module Compass::SassExtensions::Functions::InlineImage

  def inline_svg(path, id = nil)
    path = path.value
    real_path = File.join(Compass.configuration.images_path, path)
    data = [data(real_path)].flatten.pack('m').gsub("\n", '')
    id = id ? "##{id}" : ''
    url = "url('data:image/svg+xml;base64,#{data}#{id}')"
    Sass::Script::String.new(url)
  end

end
