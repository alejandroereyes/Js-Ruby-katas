def verify(age)
  if age < 21
    puts "Too Young"
  else
    puts "Proceed"
  end
end

verify(19)
verify(25)
