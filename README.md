# OKey
Random serial number generation for your own software

## Usage

There are two ways to generate keys with OKey.

### Generate following a pattern for 15 random keys

Example:

`$ okey --pattern=####-^^^^-####-^^ --output-file=keys.txt --count=15 --verbose`

The pattern special chars are :

* `#` : Digit (0-9)
* `^` : Uppercase letter (A-Z)
* `@` : Lowercase letter (a-z)

Every other character will be inserted as it is in the pattern.

> **NB**: Spaces are not allowed inside the pattern. If you want to use separators, use the hyphen separator.

### Generate following a script for 15 random keys

`$ okey --script=keys.script --output-file=keys.txt --count=15 --verbose`

The file `keys.script` must be written in OKScript.

## OKScript

### Comments

A comment start with the `#` character.

### Configuration of the pattern

To configure the pattern, there are several instructions :

```OKScript
# This script will create a 20 character-long serial number
# with 4 lowercase, an hyphen, 4 uppercase, an hypen, 5 digits, an hyphen, a separator then 3 uppercase
# Summing all not-separator characters values (Ascii values) between the index 2 to 6 must be a multiple of 9.
# Last character must be an 'X'

separator: '-'
length: 20

[0-3]: lower
[4]: separator
[5-8]: upper
[9]: separator
[10-14]: digit
[15]: separator
[16-19]: upper

(2..6): {mod 9 == 0}
(-1): 'X'
```

You can define a more complex script :

```OKScript
separator: ' '
length: 11..30
excludes: '0O'

[0-2..5]: upper
[+1]: separator
[+1-4]: digit
[+1-4..20]: upper

(0...): {mod 97 == 0}
(-3..-1): 'GHF'
```

As you can see, the OKScript is divided in three sections :

* **Configuration section** defining the separator and the total length of the serial number
* **Declarative section** defining the pattern to be generated
* **Constraints section** defining the constraints on the generation

#### Configuration section

* `separator` :
    *mandatory* | Defines the separator character (must be inside single quotes)
* `length` :
    *mandatory* | Defines the length of the generated serial number. Can be an integer or a range `10..25`.
* `excludes` :
    *optional* | Defines which characters are excluded from generation as a unique string.

#### Declarative section

Each item key in the declarative section is an index range or a specific index.
If the length is not static, you can define a range in the declarative section with a start index offset.

In the complex example above, let's explain :

`[0-2..5]: upper` means the generator will create 2 to 5 uppercase letters from index 0.
`[+1-4]: digit` means the generator will create 4 digits one index after the previous one.
`[+1-4..20]: upper` means the generator will create 4 to 20 uppercase letters one index after the previous one.

#### Constraint section

A constraint is always between parenthesis.

`(0..2)` represents the first 3 characters of the generated serial.
`(0..)` represents all characters of the generated serial.
`(-3..-1)` represents the last 3 characters of the generated serial.

The constraint value is expressed with a static value or with an algorithm.

`(0..2): {sum:mod(9)=0}` means the sum of the first 3 characters (by their ASCII code and only non-separator characters) must be multiple of 9.
`(-1): 'X'` means the last character must be an uppercase `X` character.
