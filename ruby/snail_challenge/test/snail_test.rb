require 'minitest/autorun'
require 'minitest/pride'
require_relative '../lib/snail'

class SnailTest < Minitest::Test
  def setup
    @snail = Snail.new
  end

  def test_it_exists
    assert_instance_of Snail, @snail
  end

  def test_retuns_rearranged_arr
    array_matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    assert_equal [1, 2, 3, 6, 9, 8, 7, 4, 5], @snail.move(array_matrix)
  end

  def test_retuns_larger_rearranged_arr
    array_matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    assert_equal [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10], @snail.move(array_matrix)
  end
end
