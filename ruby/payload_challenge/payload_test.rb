require 'minitest/autorun'
require 'minitest/pride'
require_relative './payload'

class SolutionTest < Minitest::Test
  def setup
    @solution = Solution.new
  end

  def test_it_exists
    assert_instance_of Solution, @solution
  end

  def test_find_matching_pair_simple
    assert_equal [5, 6], @solution.find_matching_pair([3, 4, 5, 6], 11)
  end

  def test_find_matching_pair_with_multiple_solutions
    assert_equal [30, -15], @solution.find_matching_pair([30, 4, -15, 60, 5, -8, 10], 15)
  end

  def test_find_matching_pair_no_solution
    assert_equal [], @solution.find_matching_pair([3, 43, -5, 6, -87, 13], 62)
  end

  def test_no_duplicate_nums
    assert_equal [27, -21], @solution.find_matching_pair([4, -2, 27, 3, 45, 12, -21], 6)
  end

  def test_works_with_zero
    assert_equal [12, 0], @solution.find_matching_pair([4, -2, 12, 3, 45, 0, -21], 12)
  end

end
