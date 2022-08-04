# coding=utf-8

from __future__ import unicode_literals
from isc_parser import Parser
parser = Parser(lang='hin')
text = "यदि आप इस उक्ति पर विश्वास करते हैं तो कोस्टर डायमंड का चक्कर जरूर लगाइएगा ."
text = text.split()
tree = parser.parse(text)
print('\n'.join(['\t'.join(node) for node in tree]))