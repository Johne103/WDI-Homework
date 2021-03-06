require 'test_helper'

class PlanetsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @planet = planets(:one)
  end

  test "should get index" do
    get planets_url
    assert_response :success
  end

  test "should get new" do
    get new_planet_url
    assert_response :success
  end

  test "should create planet" do
    assert_difference('Planet.count') do
      post planets_url, params: { planet: { daylength: @planet.daylength, description: @planet.description, gravity: @planet.gravity, image: @planet.image, mass: @planet.mass, moons: @planet.moons, name: @planet.name, numberofmoons: @planet.numberofmoons, radius: @planet.radius, surfacearea: @planet.surfacearea } }
    end

    assert_redirected_to planet_url(Planet.last)
  end

  test "should show planet" do
    get planet_url(@planet)
    assert_response :success
  end

  test "should get edit" do
    get edit_planet_url(@planet)
    assert_response :success
  end

  test "should update planet" do
    patch planet_url(@planet), params: { planet: { daylength: @planet.daylength, description: @planet.description, gravity: @planet.gravity, image: @planet.image, mass: @planet.mass, moons: @planet.moons, name: @planet.name, numberofmoons: @planet.numberofmoons, radius: @planet.radius, surfacearea: @planet.surfacearea } }
    assert_redirected_to planet_url(@planet)
  end

  test "should destroy planet" do
    assert_difference('Planet.count', -1) do
      delete planet_url(@planet)
    end

    assert_redirected_to planets_url
  end
end
