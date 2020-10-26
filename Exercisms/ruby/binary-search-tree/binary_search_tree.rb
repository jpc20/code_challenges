=begin
Write your code for the 'Binary Search Tree' exercise in this file. Make the tests in
`binary_search_tree_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/binary-search-tree` directory.
=end
class Bst
  attr_reader :data, :left, :right, :all_data

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
    return to_enum(:each) unless block_given?
    all_data.sort.each { |num| yield num }
  end

  def all_data
    arr ||= []
    arr << @data
    arr << @left.all_data if @left
    arr << @right.all_data if @right
    arr.flatten
  end

end
