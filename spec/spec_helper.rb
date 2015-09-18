require 'selenium-webdriver'

capabilities = {
  'deviceName' => '=iPhone 4s (8.4 Simulator)',
  'platformName' => 'iOS',
  'platformVersion' => '8.4',
  'app' => File.expand_path('./build/iphone/build/Debug-iphonesimulator/alloy-todo.app')
}

server_url = "http://127.0.0.1:4723/wd/hub"

RSpec.configure do |config|
  Dir[File.dirname(__FILE__) + '/support/*.rb'].each {|file| require file }

  config.include SpecSupport::Appium

  config.before(:each) do
    @driver = Selenium::WebDriver.for(:remote, :desired_capabilities => capabilities, :url => server_url)
  end

  config.after(:each) do
    @driver.quit
  end
end
