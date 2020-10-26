=begin
Write your code for the 'Binary Search Tree' exercise in this file. Make the tests in
`binary_search_tree_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/binary-search-tree` directory.
=end
class Bst
  attr_reader :data, :left, :right

  def initialize(head)
    @data = head
    @left = nil
    @right = nil
  end

  def insert(num)
    @left = Bst.new(num)
  end

end
