#!/bin/bash
#filename=$1
cd txt_files # The name of that directory which is containnng the simple-sent-files.
for file in $(ls $dir)
do
    cat $file>tmp.txt
    #cat $file
    isc-parser -i tmp.txt > parser-output.txt
    utf8_wx tmp.txt > wx.txt

    python2.7 getMorphPruneAndNER.py -i $file -o prune-output.txt
    g++ newdup_copy.cpp
    ./a.out
    mv oup.txt ../output/"$file"".txt" #outputdirectory "create output direcotry in parent directory"
done 