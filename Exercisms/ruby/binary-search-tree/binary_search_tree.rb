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
    if num <= @data
      @left = Bst.new(num) and return if !@left
      @left.insert(num)
    elsif num > @data
      @right = Bst.new(num) and return if !@right
      @right.insert(num)
    end
  end

  def each
    all_data = [@data]
    all_data << @left.data if @left
    all_data << @right.data if @right
    all_data.sort.each { |num| yield num }
  end

end
