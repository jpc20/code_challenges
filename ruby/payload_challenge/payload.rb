class Solution

  def find_matching_pair(payload, target)
    solution = []
    payload.each_with_index do |num, i|
      payload[(i+1)..(payload.length - 1)].each do |next_num|
        solution = [num, next_num] if num + next_num == target
      end
      break if solution != []
    end
    solution
  end

end
