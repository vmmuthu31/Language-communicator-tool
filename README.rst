Dependency Parser
=================

----

Dependency Parser for Indian languages

Install dependencies
^^^^^^^^^^^^^^^^^^^^

::

    pip install -r requirements.txt

Before Install
^^^^^^^^^^^^^^

install `postagger`_

.. _`postagger`: https://bitbucket.org/iscnlp/pos-tagger 

Install
^^^^^^^

::

    - git clone https://irshadbhat@bitbucket.org/iscnlp/parser.git
    - cd parser
    - sudo python setup.py install

Parser
^^^^^^

.. code:: python

    >>> from __future__ import unicode_literals
    >>> from isc_parser import Parser
    >>> parser = Parser(lang='hin')
    >>> text = "यदि आप इस उक्ति पर विश्वास करते हैं तो कोस्टर डायमंड का चक्कर जरूर लगाइएगा ."
    >>> text = text.split()
    >>> text
    ['यदि', 'आप', 'इस', 'उक्ति', 'पर', 'विश्वास', 'करते', 'हैं', 'तो', 'कोस्टर', 'डायमंड', 'का', 'चक्कर', 'जरूर', 'लगाइएगा', '.']
    >>> tree = parser.parse(text)
    >>> print('\n'.join(['\t'.join(node) for node in tree]))
    1	यदि	यदि	CC	CC	_	9	vmod	_	_
    2	आप	आप	PRP	PRP	_	7	k1	_	_
    3	इस	इस	DEM	DEM	_	4	nmod__adj	_	_
    4	उक्ति	उक्ति	NN	NN	_	7	k7	_	_
    5	पर	पर	PSP	PSP	_	4	lwg__psp	_	_
    6	विश्वास	विश्वास	NN	NN	_	7	pof	_	_
    7	करते	करते	VM	VM	_	1	ccof	_	_
    8	हैं	हैं	VAUX	VAUX	_	7	lwg__vaux	_	_
    9	तो	तो	CC	CC	_	0	main	_	_
    10	कोस्टर	कोस्टर	NNPC	NNPC	_	11	pof__cn	_	_
    11	डायमंड	डायमंड	NNP	NNP	_	13	r6	_	_
    12	का	का	PSP	PSP	_	11	lwg__psp	_	_
    13	चक्कर	चक्कर	NN	NN	_	15	k1	_	_
    14	जरूर	जरूर	RB	RB	_	15	adv	_	_
    15	लगाइएगा	लगाइएगा	VM	VM	_	9	ccof	_	_
    16	.	.	SYM	SYM	_	9	rsym	_	_

Parse raw-text files directly from Command Line Interface. It is highly recommended to tokenize the text files before parsing.

.. parsed-literal::

    irshad@iscnlp$ isc-parser -h
    usage: isc-parser [-h] [-v] [-i] [-o] [-u] [-l]
    
    Parser for Indian Languages
    
    optional arguments:
      -h, --help        show this help message and exit
      -v, --version     show program's version number and exit
      -i , --input      <input-file>
      -o , --output     <output-file>
      -u, --ud          set this flag to predict universal dependencies
      -l , --language   select language (3 letter ISO-639 code) {hin, urd, eng}

    irshad@iscnlp$ echo 'The quick brown fox jumps over the lazy dog .' | isc-parser -l eng 

    1	The	The	DET	DET	_	4	det	_	_
    2	quick	quick	ADJ	ADJ	_	4	amod	_	_
    3	brown	brown	ADJ	ADJ	_	4	amod	_	_
    4	fox	fox	NOUN	NOUN	_	5	nsubj	_	_
    5	jumps	jumps	VERB	VERB	_	0	root	_	_
    6	over	over	ADP	ADP	_	9	case	_	_
    7	the	the	DET	DET	_	9	det	_	_
    8	lazy	lazy	ADJ	ADJ	_	9	amod	_	_
    9	dog	dog	NOUN	NOUN	_	5	nmod	_	_
    10	.	.	PUNCT	PUNCT	_	5	punct	_	_
