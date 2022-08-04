isc-parser -i $1 > txt_files/parser-output.txt
utf8_wx $1 > txt_files/wx.txt
python2.7 getMorphPruneAndNER.py -i $1 -o txt_files/prune-output.txt 
g++ newdup_copy.cpp
./a.out 
