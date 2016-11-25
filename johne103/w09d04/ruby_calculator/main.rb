p "Press c for the math calculator, or w for your weight on moon calculator,  or m for the mortgage calculator, or s for the stamp duty calculator or t for the calculator for sugar tax"

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

elsif user_choice == "m"

  mortgage_continue = "y"

  while mortgage_continue == "y"
    puts "Please enter the value of the property in £"
    principal = gets.to_f
    puts "Please enter the annual interest rate"
    interest_rate = gets.to_f
    puts "Please enter the number of years over which payments will be made"
    number_of_payments = gets.to_f

    number_of_payments = number_of_payments * 12
    puts "Period over which payments will be made will equal: #{number_of_payments.to_i} months"

    interest_rate = (interest_rate/12)/100

    interest_rate_plus_one = interest_rate + 1

    compound_rate_payment = interest_rate_plus_one ** number_of_payments

    rate_payment_minus_one = compound_rate_payment - 1

    rate_payment_times_rate = interest_rate * compound_rate_payment

    numerator_denominator_calc = rate_payment_times_rate/rate_payment_minus_one

    monthly_payments = principal * numerator_denominator_calc
    puts "Monthly payments will be: £ #{monthly_payments.round(2)}"

    puts "Do you wish to perform another mortgage calculation? y/n"
    mortgage_continue = gets.chomp

  end

elsif user_choice == "s"

  stampduty_continue = "y"

  while stampduty_continue == "y"
    puts "Please enter the price of the property in £"
    property_price = gets.to_f

    if property_price < 125000
      puts "Stamp duty will be £0"
    elsif property_price >= 125000 && property_price <= 250000
      puts "Stamp duty will be £2,500"
    else
      puts "Stamp duty wil be £5,000"
    end
    puts "Do you wish to perform another stampduty calculation? y/n"
    stampduty_continue = gets.chomp
  end

elsif user_choice == "t"

  sugartax_continue = "y"

  while sugartax_continue == "y"
    puts "Please enter the volume of the drink in millilitres"
    vol_of_drink = gets.to_f
    puts "Please enter the total sugar content in grams per 100 millilitres"
    grams_per_100_mltr = gets.to_f

    if grams_per_100_mltr <= 5
      sugartax = 0
    elsif grams_per_100_mltr > 5 && grams_per_100_mltr <= 8
      sugartax = vol_of_drink * 0.00018
    else
      sugartax = vol_of_drink * 0.00024
    end
    puts "Sugar tax paid for drink is #{sugartax.round(4)}p"
    puts "Do you wish to perform another sugartax calculation? y/n"
    sugartax_continue = gets.chomp

  end

end

exit
