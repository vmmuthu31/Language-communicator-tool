#!/usr/bin/env bash

if [ "$EUID" -ne 0 ]
	then echo "Please run as root (sudo)"
	exit
fi

echo "[Install Script] Updating Package List"
apt update

echo "[Install Script] Installing/Upgrading Packages"
apt install python3 python3-pip git apertium flex lttoolbox-dev icu-devtools tar

echo "[Install Script] Installing/Upgrading Python Packages"
python3 -m pip install --upgrade urwid argparse setuptools

echo "[Install Script] Dowloading USR-csv.tgz"
wget --load-cookies /tmp/cookies.txt "https://docs.google.com/uc?export=download&confirm=$(wget --quiet --save-cookies /tmp/cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=1fMntGtedPATacPm2qg95D5RFbLv5ovrf' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/\1\n/p')&id=1fMntGtedPATacPm2qg95D5RFbLv5ovrf" -O "USR-csv.tgz" && rm -rf /tmp/cookies.txt

echo "[Install Script] Extracting USR-csv.tgz"
tar -xvf USR-csv.tgz

echo "[Install Script] Compiling Hindi Morph Analyzer"
cd "USR-csv/new_hnd_mo"
bash "mycompile.sh"
cd ../..

echo "[Install Script] Moving USR-csv's binary files to usr/bin"
mv USR-csv/wx_utf8 /usr/bin
mv USR-csv/utf8_wx /usr/bin
mv USR-csv/ir_no@ /usr/bin

echo "[Install Script] Cloning Git Repositories"
git clone https://bitbucket.org/iscnlp/tokenizer
git clone https://bitbucket.org/iscnlp/pos-tagger
git clone https://bitbucket.org/iscnlp/parser

echo "[Install Script] Installing Git Repositories"
cd tokenizer
python3 setup.py install
cd ..
cd pos-tagger
python3 -m pip install -r requirements.txt
python3 setup.py install
cd ..
cd parser
python3 -m pip install -r requirements.txt
python3 setup.py install
cd ..

