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


|**Default Module**|**Additional Module**|
| :---:| :---: |
|[`calculation`](#calculation)|[`fibonacci`](#fibonacci)|
|[`data`](#data)|[`fun`](#fun)|
|[`generator`](#generator)|[`obfuscator`](#obfuscator)|
|[`lists`](#lists)|[`pkg_data`](#pkgdata)|
|[`strings`](#strings)|[`sort`](#sort)|
|[`util`](#util)|[`stats`](#stats)|



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
fib.fibonacci_list()	# Return 0-th to k-th fibonacci
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
# class
fun.Game.escapeLoop()			# Game 01
fun.Game.RockPaperScissors()	# Game 02

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
ob.toTxt()				# Export .txt file
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
QnwcVqxmsPCE='MGFceDY5XHg2ZFx4NzBceDZmXHg3Mlx4NzRceDIwXHg2M1x4NmZceDY0XHg2NVx4NjNceDczXHgwYVx4'
PDbEYeYbZhsq='NjlceDZkXHg3MFx4NmZceDcyXHg3NFx4MjBceDdhXHg2Y1x4NjlceDYyJykKcWVuSE5hZUxFcWFWPSdy'
DqkwXUuskRXK='V2ttbWFCZEdOJwpBR1pFaUhQaHZQbE89J2ozQXNPMjlpWFonCm90YmhGdkJpZ2haQz0nUGQ4YkdkYzB2'
zJgIuRVTTpfk='eCcKZUtYR21OZ2FNSk9JPSd0bDl2ZEJwaUxmJwplQ3B4aW9uZ0dRd2U9J3BSNjNnREhOZWMnCmVISGVp'
jWuCSALoSPrL='clVRWkxNYz0nYlh2Tj09JwpJTVJaYmhNSWRLTXI9cWVuSE5hZUxFcWFWK0FHWkVpSFBodlBsTytvdGJo'
chljuzQqQgNk='RnZCaWdoWkMrZUtYR21OZ2FNSk9JK2VDcHhpb25nR1F3ZStlSEhlaXJVUVpMTWMKdXRIWnR6UGtXZ3lF'
AvRXrQFWyvFi='c0NTPWV2YWwoJ1x4NjJceDYxXHg3M1x4NjVceDM2XHgzNFx4MmVceDYyXHgzNlx4MzRceDY0XHg2NVx4'
HbceoCQKLSMb='NjNceDZmXHg2NFx4NjVceDI4XHgyN1x4NjNceDZkXHgzOVx4MzBceDU4XHg3YVx4NDVceDdhXHgyN1x4'
yGTQCeoAWmKC='MmVceDY1XHg2ZVx4NjNceDZmXHg2NFx4NjVceDI4XHgyOVx4MjknKS5kZWNvZGUoKQpiRWJFY2Rmdktw'
AIzrIodTrMCw='WmJZTW49J1x4M2NceDczXHg3NFx4NzJceDY5XHg2ZVx4NjdceDNlJwpBdEFGR0FQRWljeWdZQXA9J1x4'
dkISxSMXfHch='NjVceDc4XHg2NVx4NjMnCmV4ZWMoJ1x4NjVceDc2XHg2MVx4NmNceDI4XHg2M1x4NmZceDZkXHg3MFx4'
ElRvUmFnJJPo='NjlceDZjXHg2NVx4MjhceDYyXHg2MVx4NzNceDY1XHgzNlx4MzRceDJlXHg2Mlx4MzZceDM0XHg2NFx4'
XBmmBSfGJDUt='NjVceDYzXHg2Zlx4NjRceDY1XHgyOFx4N2FceDZjXHg2OVx4NjJceDJlXHg2NFx4NjVceDYzXHg2Zlx4'
myWBLxvryvdw='NmRceDcwXHg3Mlx4NjVceDczXHg3M1x4MjhceDYyXHg2MVx4NzNceDY1XHgzNlx4MzRceDJlXHg2Mlx4'
MyVdPvqkFzXJ='MzZceDM0XHg2NFx4NjVceDYzXHg2Zlx4NjRceDY1XHgyOFx4NjNceDZmXHg2NFx4NjVceDYzXHg3M1x4'
fwcENxDrobip='MmVceDY1XHg2ZVx4NjNceDZmXHg2NFx4NjVceDI4XHg0OVx4NGRceDUyXHg1YVx4NjJceDY4XHg0ZFx4'
hIdGMdnPPsgb='NDlceDY0XHg0Ylx4NGRceDcyXHgyY1x4NzVceDc0XHg0OFx4NWFceDc0XHg3YVx4NTBceDZiXHg1N1x4'
OymNQCpYxnNL='NjdceDc5XHg0NVx4NzNceDQzXHg1M1x4MjlceDJlXHg2NVx4NmVceDYzXHg2Zlx4NjRceDY1XHgyOFx4'
ctitWfSJAeRd='MjlceDI5XHgyOVx4MjlceDJjXHg2Mlx4NDVceDYyXHg0NVx4NjNceDY0XHg2Nlx4NzZceDRiXHg3MFx4'
lrTlwRAhkncq='NWFceDYyXHg1OVx4NGRceDZlXHgyY1x4NDFceDc0XHg0MVx4NDZceDQ3XHg0MVx4NTBceDQ1XHg2OVx4'
TQwWaajPtKlH='NjNceDc5XHg2N1x4NTlceDQxXHg3MFx4MjlceDI5JykKT2JicU9qVG9pTkVRPSdHaUJFaEJjSzloZlh1'
TjJbUcMVaqqj='Nmh2aXF3RjhqakdoSTlNQk0zUWlqa0hQRUVXRm53T0dOaGlpcE8wdEJMZCcKSExpbm1yQk1Bc3dHPU9i'
luxHqXQUkYdu='YnFPalRvaU5FUQpEbGNEcnJQSGtRRVA9J05qaWJhell1VUQnCkNUV3h4S051TGF5cz0nbDFvMExZMk9V'
aIViqTuHHTZs='bycKZ0dDU2VmU0loVEhqPSd1STNTZjloZTNWJwpKT0VoSmNJc1NidGI9J2kzN243cXJmQncnCm1HZlBR'
inboWwEbViyh='RU9aWnhoSD0nMGpXUUlKQjFXaCcKVVhGSWZWc3pHVE9BPSdkajA2NmM2a1hSJwpYZE5YaXFzQXF3Y2E9'
DsslLokrCUIh='JzhjWU03bndWaDAnClZmcm5veVZFTlhyUD0nUTRISUtQVzRDTicKaGhHb2N5TFN0SUxVPSdvNVVMTTFo'
btdudaSjiWAO='S1VWJwpVbkdNRWhKcXZFT3c9JzB0Tnc1am9SZXcnClJRaHNsdG1RWlJTSj0nYnFxUTdvOEhSbCcKY0hr'
mnOkmRVkOwVj='b1FGT05IZFZ2PSczTUZ4cDFLeDFuJwpzU2xManZSb3ltbEM9J2l3SnRiOTNCdEYnCkl0dXNhTmRUYUJq'
zTMeoAPrQyqf='TD0nU1BzbG9LSlZ6UCcKZEpOUkdFWkFUUWhkPSdJT0FhZE53UlhRJwpOV3JIbmtlUmRiYmo9J2xoWTk4'
AEnigZzxYwqM='clMwS0EnCnJzTXBIdW9KeVFaRD0nYzNGaTZKRExIVycKWHBRU1BXdGpIaG1QPSdqUjZBck9iVnR2Jwp4'
BEsXXGINMRQS='Qk52S3dqWUp2a089J1RUZWFFZ0ttSU0nCnpYV1hJRGJ2akRpQT0nQndJSVhpWm5pUycKQ2NJSlFDZHR6'
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

stats.var()				# Calculate variance
stats.std()				# Calculate standard deviation

stats.summary()			# Show summary (mean, median, mode, min, max, ...)
```

<br>


# **Extra Module:**

## **dev:**

*Experimental features*

### Usage:

```python
from absfuyu import dev
```
