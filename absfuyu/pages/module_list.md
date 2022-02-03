<div align="center">
  	<h1 align="center">
  		<strong>ABSFUYU'S MODULE LIST</strong>
	</h1>
</div>

By default, [`absfuyu`](../index.md) already imported:<br>
[`calculation`](#calculation),
[`data`](#data),
[`generator`](#generator),
[`lists`](#lists),
[`strings`](#strings),
[`util`](#util),
---

<br>

# **Default Module:**

## **calculation:**

*use to calculate small thing*

### Usage:

```python
# from absfuyu import calculation
from absfuyu import calculation as cal
```

### Functions:
```python
cal.isPrime()       # Check if a prime number
cal.isPerfect()     # Check if a perfect number

cal.lsum()          # Calculate total value in a list
cal.lavg()          # Calculate average value in a list

cal.matsum()        # Calculate total value in a matrix
```

<br>

## **data:**

*some common data*

### Usage:

```python
from absfuyu import data
```

### Functions:
```python
# Word class
data.Word.ALPHABET              # "abcdefghijklmnopqrstuvwxyz"
data.Word.ALPHABET_LIST         # list("abcdefghijklmnopqrstuvwxyz")

# Number class
data.Number.PerfectNumber()     # Return k-th perfect number
data.Number.PrimeNumber()       # Return k-th prime number
```

<br>

## **generator:**

*generate stuff*

### Usage:

```python
# from absfuyu import generator
from absfuyu import generator as gen
```

### Functions:
```python
gen.checkDigitGen()         # Return a check digit from a number
gen.randStrGen()            # Generate random string
gen.strGen()                # Generate random string from a string
```

<br>

## **lists:**

*some list method*

### Usage:

```python
from absfuyu import lists
```

### Functions:
```python
lists.stringify()           # Convert all items in list into string
lists.list_sort()           # Sort (works with multiple type / mixed type)
lists.list_freq()           # Return a dictionary with {key: item, value: frequency}
```

<br>

## **strings:**

*some string method*

### Usage:

```python
from absfuyu import strings
```

### Functions:
```python
strings.strDiv()            # Divide long string into smaller part
strings.strDivVar()         # Divide long string into smaller part with variable name

strings.strAna()            # Count number of apearance of each character type in string
strings.strHex()            # Convert string into hex form

strings.isPalindrome()      # Check if string is palindrome
strings.isPangram()         # Check if string is pangram
```

<br>

## **util:**

*some random utilities*

### Usage:

```python
from absfuyu import util
```

### Functions:
```python
util.toCelcius()                # Convert Celcius degree to Fahrenheit degree
util.toFahrenheit()             # Convert Fahrenheit degree to Celcius degree

util.unique_list()              # Remove duplicate items in list

@util.measure_performance       # Use as a decorator to measure performance
```

<br>

# **Additional Module:**

## **fibonacci:**

*fibonacci stuff*

### Usage:

```python
# from absfuyu import fibonacci
from absfuyu import fibonacci as fib
```

### Functions:
```python

```

<br>


## **fun:**

*some fun stuff*

### Usage:

```python
from absfuyu import fun
```

### Functions:
```python

```

<br>

## **obfuscator:** 

*it does what it said*

### Usage:

```python
# from absfuyu import obfuscator
from absfuyu import obfuscator as ob
```

### Functions:
```python

```

<br>

## **pkg_data:** 

*absfuyu's extra data*

### Usage:

```python
from absfuyu import pkg_data
```

### Functions:
```python

```

<br>

## **sort:**

*just sort*


### Usage:

```python
from absfuyu import sort
```

### Functions:
```python

```

<br>

## **stats:**

*basic statistic*

### Usage:

```python
from absfuyu import stats
```

### Functions:
```python

```

<br>


# Hidden Module:

## **dev:**

## **code_red:**

---

<p align="center"><strong>This page is Work In Progress</strong></p>


