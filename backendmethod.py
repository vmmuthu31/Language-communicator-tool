#This is the file where we are going to do the USR generation and send it to flask app.
import json
import os
import io
from flask import jsonify
def createUSR(sentence_for_usr): #this function creates USRs and reads them from .txt file into a dictionary
    #create a txt file for the sentence
    f1=io.open("txt_files/input.txt","w",encoding="UTF-8") #add your input directory here and usrfilename here.
    f1.write(sentence_for_usr)
    f1.close()
    os.system("sh makenewusr.sh txt_files/input.txt>output/new_usr.txt") #USR generated in output dir.
    for usrfile in os.listdir("output"):
        f=io.open(os.path.join("output",usrfile),'r',encoding="UTF-8") #add your output directory here.
        usr_list=f.readlines() #We have a list of strings
        #Convert list of strings in a proper format
        usr_dict2={}
        usr_dict2['status']="ok",
        usr_dict2["sentence_id"]=0,
        usr_dict2['sentence']=usr_list[0].strip()
        usr_dict2['Concept']=usr_list[1].strip().split(",")
        usr_dict2['index']=usr_list[2].strip().split(",")
        usr_dict2['SemCateOfNouns']=usr_list[3].strip().split(",")
        usr_dict2['GNP']=usr_list[4].strip().split(",")
        usr_dict2['DependencyRelations']=usr_list[5].strip().split(",")
        usr_dict2['Discourse']=usr_list[6].strip().split(",")
        usr_dict2['Speakers']=usr_list[7].strip().split(",")
        usr_dict2['Scope']=usr_list[8].strip().split(",")
        usr_dict2['SentenceType']=usr_list[9].strip()
        #Code for cleaning the input and output directory,once the values are fetched in dictionary
        # for infiles in os.listdir("txt_files"):
        #      os.remove(os.path.join("txt_files",infiles))

        # for opfiles in os.listdir("output"):
        #      os.remove(os.path.join("output",opfiles))

        
        return usr_dict2


if __name__=='__main__':
    createUSR()
