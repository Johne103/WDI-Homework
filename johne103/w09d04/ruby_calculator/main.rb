p "Press c for the calculator, w for your weight on the moon"
user_choice = gets.chomp

if user_choice == "c"
  calc_continue = "y"

  while calc_continue == "y"
    p "Do you wish to calculate the square root? y/n"
    sq_root_req = gets.chomp

    if sq_root_req == 'y'
      p "Please enter a number to get the square root"
      sq_root_num = gets.to_f
      puts "The square root of #{sq_root_num} is: #{Math.sqrt(sq_root_num)}"

    else
      p "Please enter your first number"
      first_num = gets.to_f
      puts "your first number: #{first_num}"

      p "Please enter the second number"
      second_num = gets.to_f
      puts second_num

      p "What operation do you wish to perform +, -, /, x or p(for power)"

      calc_operation = gets.chomp

        case calc_operation
        when "+"
          puts "#{first_num} plus #{second_num} equals: #{first_num + second_num}"
        when "-"
          puts "#{first_num} minus #{second_num} equals: #{first_num - second_num}"
        when "/"
          puts "#{first_num} divided by #{second_num} equals: #{first_num / second_num}"
        when "*"
          puts "#{first_num} multiplied by #{second_num} equals: #{first_num * second_num}"
        when "p"
          if second_num == 0
            power_ans = 1
          else
            power = second_num
            power_ans = 1
            while power > 0
              power_ans = power_ans * first_num
              power = power - 1
            end
          end
          puts "#{first_num} to the power of #{second_num} equals: #{power_ans}"
        else
          puts "Please enter a correct operator: +, -, /, x or p(for power)"
        end

    end
      puts "Do you wish to perform another math calculation? y/n"
      calc_continue = gets.chomp

  end
  p "Thanks for using this math calculator"
  # exit

elsif user_choice == "w"

  weight_continue = "y"

  while weight_continue == "y"
    puts "Please enter your weight in Kgs"
    earth_weight = gets.to_f
    moon_weight = earth_weight * 0.833
    puts "Your weight on the moon will be: #{moon_weight}Kgs"
    puts "Do you wish to perform another weight on moon calculation? y/n"
    weight_continue = gets.chomp

  end
  p "Thanks for using this weight on moon calculator"
end
exit
