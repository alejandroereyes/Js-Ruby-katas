def verify(age)
  if age.class == Array
    age.each do |num|
      if num < 21
        puts "Too Young"
      else
        puts "Proceed"
      end
    end
  else
    if age < 21
      puts "Too Young"
    else
      puts "Proceed"
    end
  end
end

verify([19, 16, 9])
verify(25)
