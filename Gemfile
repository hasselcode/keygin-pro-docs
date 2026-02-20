source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"

# Gemas necesarias para remote_theme y el tema just-the-docs
gem "jekyll-remote-theme"
gem "jekyll-include-cache"  # Necesaria para just-the-docs

# Tema (ahora se maneja a través de jekyll-remote-theme)
# No necesitas gem "just-the-docs" aquí porque lo cargas remotamente

gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-remote-theme"
  gem "jekyll-include-cache"  # Añadida también aquí para asegurar
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]