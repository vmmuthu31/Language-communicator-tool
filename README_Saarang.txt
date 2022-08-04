(1) Install iscnlp tokenizer, pos-tagger, parser 
	Please follow the instructions given in the [https://bitbucket.org/iscnlp/] repository.
	First, install the tokenizer, then the pos-tagger, and then the parser. (Run all the commands in home itself)
	
	Read the readme given in all three and run the code given in terminal.
	In pos-tagger and parser,
		Run the dependencies code after installing them with given codes, i.e. in each of the three folders (tokenizer, pos-tagger and parser) run
$ pip install -r requirements.txt

		
	After installing,
		Keep your input file in parser folder and run command
			isc-parser -i <input_file_name> > <output_file_name> 
		in terminal and your parser output will be saved in your output file.
			eg, 
				isc-parser -i inp > oup

(2) Install Morph
	Download the given file [ilmt-morph-ner-from-api-0.3.zip] and extract it in parser folder.
	Now open ilmt folder and put .py files in parser folder OR change the path of morph command in [makenewusr.sh file].
	
	NOTE: make sure you're using ilmt-morph-ner-from-api-0.3.zip and not 0.2.

	Download the given file [dictionary-scrapper.py] and put in parser folder.
	Run following commands in terminal in parser folder.
		sudo apt install python2.7
		sudo apt-get install python-requests
		
	Download get-pip.py and copy it in parser folder.
	Run following commands in terminal in parser folder.
		sudo python2.7 get-pip.py 
		sudo pip2.7 install requests
		
	Keep your input file in parser folder and run following command
		python2.7 getMorphPruneAndNER.py -i <input_filename> -o <ouput_filename>
	in terminal and your morph output will be saved in your output file.
			eg,
				python2.7 getMorphPruneAndNER.py -i test -o testoup

(3) Copy wx_utf8, utf8_wx and ir_no@ into /usr/bin
$ mv wx_utf8 /usr/bin
$ mv utf8_wx /usr/bin
$ mv ir_no@ /usr/bin

(4) Make sure [TAM-num-per-details.tsv.wx] and [H_concept-to-mrs-rels.dat] are there in parser folder.

(5) Open [new_dup.cpp], go to line 182 and change
	[/home/vaishnavi/language_communicator/dictionaries/H_concept-to-mrs-rels.dat]
to simply
	[H_concept-to-mrs-rels.dat]
(makeing sure file H_concept-to-mrs-rels.dat] is in parser folder already)

(7) Run program
$ sh makenewusr.sh <input_filename>

!!! NOTE: make sure that the input file is only one line (one sentence), and the final word and final punctuation mark are separated by a space.

The output will be stored in file [oup.xlsx].