def funct(nums):
    a = {"even": [], "odd": {}}
    for i in nums:
        if i % 2 == 0:
            a["even"].append(i)
        else:
            a["odd"].append(i)

    return a
