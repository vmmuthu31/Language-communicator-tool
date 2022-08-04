README:
A) To get Morph and NER run following:

usage: getMorphAndNER.py [-h] -i INPUTFILE [-o OUTPUTFILE]

arguments:
  -h, --help            show this help message and exit
  -i INPUTFILE, --inputFile INPUTFILE
                        exception words file (with path)
  -o OUTPUTFILE, --outputFile OUTPUTFILE
                        exception words file (with path){Optional Argument}

Example:
a) To save outpurt in file:
$python getMorphAndNER.py -i test.txt -o test.out

b) to print in console:
python getMorphAndNER.py -i test.txt




B) To get Morph , Pruning and NER run following:
usage: getMorphPruneAndNER.py [-h] -i INPUTFILE [-o OUTPUTFILE]

arguments:
  -h, --help            show this help message and exit
  -i INPUTFILE, --inputFile INPUTFILE
                        exception words file (with path)
  -o OUTPUTFILE, --outputFile OUTPUTFILE
                        exception words file (with path){Optional Argument}

Example:
a) To save outpurt in file:
$python getMorphPruneAndNER.py -i test.txt -o test.out

b) to print in console:
python getMorphPruneAndNER.py -i test.txt

