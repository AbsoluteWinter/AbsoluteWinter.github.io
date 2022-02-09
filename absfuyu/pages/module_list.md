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
[`util`](#util)
---

<br>


|**Default Module**|**Additional Module**|**Other**|
| :---:| :---: | :---: |
|[`calculation`](#calculation)|[`fibonacci`](#fibonacci)|[`dev`](#dev)|
|[`data`](#data)|[`fun`](#fun)|[`config`](#config)|
|[`generator`](#generator)|[`obfuscator`](#obfuscator)||
|[`lists`](#lists)|[`pkg_data`](#pkgdata)||
|[`strings`](#strings)|[`sort`](#sort)||
|[`util`](#util)|[`stats`](#stats)||
||[`extra`](#extra)||
||[`dicts`](#dicts)||



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

cal.lcm()	    # Calculate least common multiple
```
### Example:
```python
from absfuyu import calculation as cal
matrix = [[5,9,3],
          [5,3,1],
          [9,63,4]]
cal.matsum(matrix)
```
```
output: 102
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

### Example:
```python
from absfuyu import generator as gen
# generate a random password
print("".join(gen.randStrGen(20,1,"full")))
```
```
output: [FV6,FwiD'cE7T+>39l%
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

### Example:
```python
from absfuyu import strings
long_str = "sdfgoisyufgoiadfgaskjdfhbiwaeufbksdjfbawioeuhfbibnasdjfboaweufbnjksabfpwaeufbaoujbeiofuabwjenfioauefbiubajkefbioaefbiksbdviawyug"
strings.strDivVar(long_str,50,6)
```
```
output:
["xzKuCe='sdfgoisyufgoiadfgaskjdfhbiwaeufbksdjfbawioeuhfbibn'",
 "lvwcdS='asdjfboaweufbnjksabfpwaeufbaoujbeiofuabwjenfioauef'",
 "TWvyIJ='biubajkefbioaefbiksbdviawyug'",
 'OvDhDJ=xzKuCe+lvwcdS+TWvyIJ',
 'OvDhDJ']
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
fib.fibonacci()			# Return k-th fibonacci
fib.fibonacci_list()		# Return 0-th to k-th fibonacci
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
# game
fun.game_escapeLoop()			# Game 01
fun.game_RockPaperScissors()	# Game 02

# Function
fun.force_shutdown()			# Force computer to shutdown
fun.happy_new_year()			# Try it
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
ob.toSingleLine()		# Convert multiple lines of code into one single line
ob.obfuscate()			# Obfuscate code
ob.toTxt()			# Export .txt file
```

### Example:
```python
from absfuyu import obfuscator as ob
my_code = r"""
print("Hello World")
"""
print(ob.obfuscate(my_code))
```
```
output:
exec('\x69\x6d\x70\x6f\x72\x74\x20\x62\x61\x73\x65\x36\x34')
GakqsASlDMko='ZXhlYygnXHg2OVx4NmRceDcwXHg2Zlx4NzJceDc0XHgyMFx4NjJceDYxXHg3M1x4NjVceDM2XHgzNFx4'
PDbEYeYbZhsq='NjlceDZkXHg3MFx4NmZceDcyXHg3NFx4MjBceDdhXHg2Y1x4NjlceDYyJykKcWVuSE5hZUxFcWFWPSdy'
...
xAMIWxeBAezB='c3FDPSd3ejZaWHF1TkNKJwpPWlphWGNHaW9TeGg9J2U3bE51TU1obmQnClFFUXhVTkNCTU9HdD0nNkta'
vmaIGLpmjcHZ='ZTVySGU1eScKQWJ3eFZPS2hKeWxjPSdTM25aSzA5cjcxJwpreVlISHpqdU5hcWY9JzFFdHNiazlmSE4n'
BngTvlkDyLrz='Cg=='
CHLYUbIgdcoN=GakqsASlDMko+QnwcVqxmsPCE+PDbEYeYbZhsq+DqkwXUuskRXK+zJgIuRVTTpfk+jWuCSALoSPrL+chljuzQqQgNk+AvRXrQFWyvFi+HbceoCQKLSMb+yGTQCeoAWmKC+AIzrIodTrMCw+dkISxSMXfHch+ElRvUmFnJJPo+XBmmBSfGJDUt+myWBLxvryvdw+MyVdPvqkFzXJ+fwcENxDrobip+hIdGMdnPPsgb+OymNQCpYxnNL+ctitWfSJAeRd+lrTlwRAhkncq+TQwWaajPtKlH+TjJbUcMVaqqj+luxHqXQUkYdu+aIViqTuHHTZs+inboWwEbViyh+DsslLokrCUIh+btdudaSjiWAO+mnOkmRVkOwVj+zTMeoAPrQyqf+AEnigZzxYwqM+BEsXXGINMRQS+xAMIWxeBAezB+vmaIGLpmjcHZ+BngTvlkDyLrz
YnhgOOBwNxPhGyz='\x3c\x73\x74\x72\x69\x6e\x67\x3e'
NJiyIBILNnhtPqg='\x65\x78\x65\x63'
exec('\x65\x76\x61\x6c\x28\x63\x6f\x6d\x70\x69\x6c\x65\x28\x62\x61\x73\x65\x36\x34\x2e\x62\x36\x34\x64\x65\x63\x6f\x64\x65\x28\x43\x48\x4c\x59\x55\x62\x49\x67\x64\x63\x6f\x4e\x29\x2c\x59\x6e\x68\x67\x4f\x4f\x42\x77\x4e\x78\x50\x68\x47\x79\x7a\x2c\x4e\x4a\x69\x79\x49\x42\x49\x4c\x4e\x6e\x68\x74\x50\x71\x67\x29\x29')
```

<br>

## **pkg_data:** 

*absfuyu's extra data*

### Usage:

```python
from absfuyu import pkg_data
pkg_data.loadData(<data_name>)
```

### List of available data:
```python
None
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
sort.selection_sort()		# Sort
sort.insertion_sort()		# Sort
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
stats.mean()			# Calculate average
stats.median()			# Calculate median
stats.mode()			# Calculate mode
stats.percentile()		# Calculate percentile

stats.var()			# Calculate variance
stats.std()			# Calculate standard deviation

stats.summary()			# Show summary (mean, median, mode, min, max, ...)
```

<br>

## **dicts:**

*some dict methods*

### Usage:

```python
from absfuyu import dicts
```

### Functions:
```python
dicts.dict_int_analyze()		# Analyze a dict
```

<br>


## **extra:**

*more features*

### Required:

- absfuyu[extra]

### Usage:

```python
from absfuyu import extra
```

### Functions:
```python
extra.happy_new_year()		# Improved. Tried it ;)
```

<br>

# **Other Module:**

## **dev:**

*Experimental features*

### Usage:

```python
from absfuyu import dev
```

<br>

## **config:**

*Module configuration*

### Usage:

```python
from absfuyu import config
```

### Config option:
```json
"luckgod-mode": false
```
