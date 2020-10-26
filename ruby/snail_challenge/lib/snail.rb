class Snail
  def move(array_matrix)
    new_arr = []
    array_matrix.each_with_index do |arr, index|
      if index == 0
        new_arr << arr
        array_matrix.shift 
      elsif index != 0 && arr != array_matrix.last
        new_arr << arr.last
      elsif arr == array_matrix.last
        new_arr << arr.reverse
      end
    end
    # (new_arr << array_matrix[1].first(2)).flatten

  end
end
