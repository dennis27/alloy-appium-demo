require 'spec_helper'

describe "Todo app" do
  it "can add a todo item" do
    add_todo
    list_item = xpath('//UIATableView[1]/UIATableCell[1]/UIAStaticText[1]').first
    list_item.text.should eq '[Buy milk]'
  end

  it "can delete a todo item" do
    add_todo
    find("Delete item").click
    list_item = xpath('//UIATableView[1]/UIATableCell[1]/UIAStaticText[1]')
    list_item.size.should eq 0
  end

  def add_todo
    click_on_add
    wait_for_animation
    type_in find('Todo field'), 'Buy milk'
    find('Add item').click
    wait_for_animation
  end

  def click_on_add
    tap_once 302, 48
  end
end
