require 'test_helper'

class Api::LanguageControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_language_index_url
    assert_response :success
  end

end
