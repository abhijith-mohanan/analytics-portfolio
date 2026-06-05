def calculate_shipping_cost(weight, distance):
    if weight <= 100 :
      rate = 5
      
    elif weight <= 300:
        rate = 4
    else:
        rate = 3

    cost = weight * rate
    if distance == "international":
        cost *= 1.2
    
    return f"Shipping cost for {weight} kg ({distance}): ${cost:.2f}"

while True:
    try:
        distance = input("Enter the distance (domestic/international) or 'done' to exit: ").lower()
        
        if distance == "done":
            break

        weight = float(input("Enter the weight of the package in kg: "))
        
        if distance not in ["domestic", "international"]:
            print("Invalid distance. Please enter 'domestic' or 'international'.")
            continue
        else:
            result = calculate_shipping_cost(weight, distance)
            print(result)

    except ValueError:
        print("Invalid input. Please enter a valid number for weight.")       
    
    