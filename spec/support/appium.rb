module SpecSupport
  module Appium
    def find(name)
      driver.find_element(:name, name)
    end

    def xpath(path)
      driver.find_elements(:xpath, path)
    end

    def driver
      @driver
    end

    def wait_for_animation
      sleep 0.5
    end

    def type_in(field, text)
      field.send_keys text
    end

    def tap_on(name)
      find(:name, name).click
    end

    def tap_once(x, y)
      driver.execute_script 'mobile: tap', :tapCount => 1, :touchCount => 1, :duration => 0.5, :x => x, :y => y
    end
  end
end
