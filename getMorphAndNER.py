#!/usr/bin/env python
# -*- coding: utf-8 -*-
import codecs, sys, requests, json, os
from argparse import ArgumentParser

#configuring commandline parser and check if the all command line parameters are valid
parser=ArgumentParser()
parser.add_argument('-i', '--inputFile', help="exception words file (with path)", required=True)
parser.add_argument('-o', '--outputFile', help="exception words file (with path)")
args = parser.parse_args()


inputFile = args.inputFile
outputFile = args.outputFile

if inputFile is None:
	print  (" Please enter valid inputFile file.")
	sys.exit(0); 

if not os.path.isfile(inputFile):
	print( " input file ", inputFile ,"does not exist." )
	sys.exit(0);

# reading input file 
inputfile = inputFile
f = codecs.open(inputfile, "rb", "utf-8")
inputlines = f.readlines()
f.close()

url = "https://ssmt.iiit.ac.in/samparkuniverse"
header = {"Content-Type": "application/json;charset=UTF-8"}
start = 1
end = 9
proxies = {
        "http" :None,
        "https":None,
}

temp = ""
for line in inputlines:
	line = line.strip()
	if line:
		dataToSend = {"text":line.strip().encode('utf-8'), "source_language":"hin", "target_language":"urd", "start":start, "end":end}
		#print dataToSend
		res = requests.post(url, data=json.dumps(dataToSend), headers=header)
		
		respDict = json.loads(res.text)
		morphOut = respDict["modular_outputs"]["morph-3"]
		nerOut = respDict["modular_outputs"]["ner-9"]

		temp = temp + "Sentence :: " + line + "\nMorph Output:\n" + morphOut.strip() + "\nNER Output:\n" + nerOut + "\n..................................\n"
	#break

if not (not outputFile):
	f = codecs.open(outputFile, "wb", "utf-8")
	f.write(temp)
	f.close()
else:
	print temp
