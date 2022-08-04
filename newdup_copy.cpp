#include <fstream>
#include <iostream>
#include <string>
#include <sstream>

using namespace std;

string lin,wrd,tmp,arr[20],w[200][200];
int i=0,j,k,kop,kop1,fs=0,cnt=0,i1,j2,head=0,l=0,countdic=0,dicwrdindex=0,mainie=0,pof=0;
static string com[30];
static int dicwrd[2][30];
string vaux;

int main(int argc, char *argv[])
{

	
//OPEN PARSER FILE

	fstream f;
 	string fname;
 	
 	fname = "txt_files/parser-output.txt";
 	f.open(fname.c_str());
	
	while(f >> tmp)
 	{
 		getline(f,lin);
 		//cout<<lin<<endl;
 		arr[i]=lin;
 		stringstream s(lin);
 		j=0;
 		//while(getline(s,wrd))
 		while(s >> wrd)
 		{
 			//cout<<wrd<<endl;
 			w[i][j]=wrd;			//FILE BROKEN INTO INDIVIDUAL WORDS
 			j++; 
  		}
 		i++;
 		
 	}
 	
 	for(i=0;i<30;i++)
 	{	if(w[i][6]=="rsym")			
		{
			cnt=(i+1);
		}
	}
			
//ROW 1 (SENTENCE PRINT)

	cout<<"#";
	for(i=0;i<cnt;i++)
	{
		cout<<w[i][0]<<" ";			//GIVEN SENTENCE PRINTED
	}
	cout<<endl;
	
	
//ROW 2 (GROUP)

	//cout<<"#";
	for(i=0;i<cnt;i++)
	{
		if((i==(cnt-1)) || (w[i][6]=="pof") || (w[i][6]=="pof__cn") )
		{
			com[i]="0";
			//cout<<w[i][0]<<" ";
		}
		else if((w[i][6]!="lwg__psp"))
		{
			com[i]="1";
			//cout<<w[i][0]<<",";
		}
		else if((w[i][6]=="lwg__psp"))
		{
			com[i]="-1";
			//cout<<w[i][0]<<",";
		}
		else
		{
			com[i]="1";
		}			
	}
	//cout<<endl;


	/*for(i=0;i<cnt;i++)
	{
		cout<<i<<"->"<<com[i]<<endl;
	}*/
	

//ROW 3 (Concept from Concept dictionary)

string arr5[100],arr6[20],w5[200][200],w6[200][200],hw1[2][30];
int i=0,j,k=0;
//wx and hindi in an array
	fstream f5,f6;
	
		
//prune file
	string fname5;
	fname5 = "txt_files/prune-output.txt";
 	f5.open(fname5.c_str());
 	while(f5 >> tmp)
 	{
 		getline(f5,lin);
 		//cout<<lin<<endl;
 		arr5[i]=lin;
 		stringstream s(lin);
 		j=0;
 		while(s >> wrd)
 		{
 			w5[i][j]=wrd;
 			j++; 
  		}
 		i++;	
 	}
 	
//wx file	
	string fname6;
	fname6 = "txt_files/wx.txt";
 	f6.open(fname6.c_str());
	//while(f2 >> tmp)
 	{
 		getline(f6,lin);
 		//cout<<lin<<endl;
 		arr6[i]=lin;
 		stringstream s(lin);
 		j=0;
 		while(s >> wrd)
 		{
 			w6[0][j]=wrd;
 			j++; 
  		}
 	}
	
//hindi-wx in an array

	for(j=0;j<20;j++)		
	{
		hw1[0][j]=w5[0][j];
	}
	for(j=0;j<20;j++)		
	{
		hw1[1][j]=w6[0][j];
	}
	/*for(i=0;i<30;i++)
	{
		//cout<<"hey";
		cout<<hw1[0][i]<<" ";
	}
	for(i=0;i<30;i++)
	{
		//cout<<"hey";
		cout<<hw1[1][i]<<" ";
	}*/
	
//MAIN PART
	int r,c,counter=0,unavl=0;
	string wrdarr[500][2];
	k=1;
	//cout<<endl;
	string word,lin;
	unsigned int count=0;
	char ltr;
	ifstream infile;
	infile.open("H_concept-to-mrs-rels.dat"); //dictionary open
	
	//VERB GROUP IN AN ARRAY TO SEARCH IN TAM
	
	ifstream tamfile;
	tamfile.open("TAM-num-per-details.tsv.wx"); //TAM open
	string tamword[200][200];
	
	//while (infile)
	{
   		 
    		//if (!count) 
    		{
       			//break;
       		}
       		//else
       		{
       			//cout<<"h";
       			for(i=0;i<cnt;i++)
       			{
        			//if((w[i][6]!="lwg__psp") && (w[i][6]!="rsym"))		//(w[i][6]!="lwg__rp") &&
        			{
        				//cout<<w[i][0]<< " ";   	cout<<hw1[1][i]<< " ";
        				for(r=0;r<200;r++)
					{
						for(c=0;c<30000;c++)
						{		//cout<<w5[r][c];			
 							if(w5[r][c]==hw1[1][i])
 							{
 								counter++;
 								
 								//cout<<w5[r][c+3]<<endl;
 								//cout<<w5[r][c];
 								string parsed,input=w5[r][c+3];
								stringstream ssin(input);
								//cout<<input<<endl;
								//k=0;
								//cout<<counter;
								if(counter==2)
								{
									while(getline(ssin,parsed,','))
									{	
										//cout<<parsed<<endl;
										string root;
										stringstream ssin1(parsed);
										while(getline(ssin1,root,'\''))
										{
											//cout<<k;
											if(k%2==0)
											{
												//cout<<root<<endl;
												wrdarr[unavl][0]=root;
												unavl++;
											}
											k++;
										}
										break;	
									}
								}
								//unavl++;	
 							}
 							
 							break;
 						}
 					}
 					counter=0;
        			}		
        		}
        		
        		//append in words
        		//cout<<unavl;
        		//string app="_1";
        		for(i=0;i<unavl;i++)
        		{
        			//cout<<wrdarr[i][0]<<" ";
        			//wrdarr[i][0].append(app);
        		}
        		
        		
        		//VERB GROUP IN ARRAY
			string verb[50];
			int which=0,lastwrd=0;
			for(i=0;i<cnt;i++)
			{
				
				if((w[i][6]=="lwg__vaux") && (w[i+1][6]=="lwg__vaux_cont"))
				{
					//cout<<w[i][0]<<" ";
					string s = hw1[1][i]; 	//wrdarr[i][0]+" "+wrdarr[i+1][0];
					//cout<<s;
					for(j=0;j<s.length();j++)
				    	{
						//cout<<s[j]<<" ";
						verb[j]=s[j];
						//cout<<verb[j]<<" ";
						//verb[0]=hw1[1][i]; 	//wrdarr[i][0];
					}
						lastwrd=j;
						vaux=hw1[1][i+1];	//wrdarr[i+1][0];	
						which=1;
						com[i]="0";
						com[i+1]="0";
					
				}
				else if((w[i][6]=="main") && (w[i+1][6]=="lwg__vaux"))
				{
					//cout<<w[i][0]<<" ";
					string s = hw1[1][i]; //+" "+hw1[1][i+1];	//+wrdarr[i+1][0];	wrdarr[i][0]
					//cout<<s;
					for(j=0;j<s.length();j++)
				    	{
						//cout<<s[j]<<" ";
						verb[j]=s[j];
						//cout<<verb[j]<<" ";
						which=2;
					}
					//which=2;
					//verb[0]=hw1[1][i];
					vaux =hw1[1][i+1];
					lastwrd=j;
					com[i]="1";
					com[i+1]="0";
				}
				else if(w[i][6]=="main")
				{
					//cout<<w[i][0]<<" ";
					string s = hw1[1][i];		//wrdarr[i][0];
					vaux = hw1[1][i];
					//cout<<s;
					for(j=0;j<s.length();j++)
				    	{
						//cout<<s[j]<<" ";
						verb[j]=s[j];
						//cout<<verb[j]<<" ";
						which=3;
					}
					lastwrd=j;
					com[i]="1";
				}	
			}
			//cout<<vaux;
			//cout<<lastwrd;
			
			//MAIN PRINTING
			l=1;
        		for(i=0;i<(cnt-1);i++)
        		{
        			/*if(com[i+1]=="1")
        			{
        				cout<<",";
        			}*/
        			//cout<<wrdarr[i][0]<<" ";    
        			//cout<<hw1[1][i]+"_1"<<" ";
       				if((w[i][6]=="main"))
        			{
        				//dicwrd[0][l]=w[i][0];
					dicwrd[1][l]=(i+1);
					//cout<<dicwrd[1][l];
					l++;
					
      				}
     
        			if(w[i][6]=="pof__cn")
        			{
        				cout<<wrdarr[i][0]+"_1"<<"+";
        				com[i]="0";
        				//dicwrd[0][l]=w[i][0];
        				dicwrd[1][l]=(i+1);
        				l++;
        				//cout<<i<<com[i];
        			}
        			/*else if((com[i]=="1") && ((w[i][6]=="lwg__psp") && (w[i][6]=="rsym")))
        			{
        				cout<<",";
        			}
        			else if((com[i]=="1") && ((w[i][6]!="lwg__psp") && (w[i][6]!="rsym")))
        			{
        				cout<<",";
        				cout<<wrdarr[i][0];
        			}*/
        			else if(w[i][6]=="pof")
        			{
        				cout<<wrdarr[i][0]<<"+";
        				com[i]="0";
        				//dicwrd[0][l]=w[i][0];
        				dicwrd[1][l]=(i+1);
        				l++;
        			}
        			else if((w[i][6]!="lwg__psp") && (w[i][6]!="rsym"))
        			{	
        				if((w[i][6]=="main") || (w[i][6]=="lwg__vaux") || (w[i][6]=="lwg__vaux_cont")) 
        				{
        					
        					//cout<<w[i][0];
        					if(which==1)
        					{
        						string v;
        						cout<<hw1[1][i]<<"_1-";
        						for(j=0;j<2;j++)
	 						{
	 							cout<<verb[j];	
	 						}
	 						cout<<"_1-";
        						i=0;
        						tamfile >> word;
			 				while(!tamfile.eof())
							{
								getline(tamfile,lin);
								stringstream s(lin);
								j=0;
						 		//while(getline(s,wrd))
						 		while(s >> word)
						 		{
						 			//cout<<wrd<<endl;
						 			tamword[i][j]=word;
						 			//cout<<tamword[i][j]<<" ";			
						 			j++;
						 			 
						  		}
						 		i++;
							}
							//cout<<verb[1];
							int how=0;
							/*
							for(i=0;i<200;i++)
							{
								for(j=0;j<200;j++)
								{
									if(tamword[i][j]==verb[0])
									{
										//cout<<tamword[i][j];
										if(tamword[i][j+1]==verb[1])
										{
											how++;
											//cout<<tamword[i][j+1];
											if(how==1)
											{
												//cout<<tamword[i][j]<<" "<<tamword[i][j+1]<<" ";
												cout<<"-"<<tamword[i][0]<<"";
												break;
											}
										}
										
									}
								}
							}*/
							
							for(j=0;j<lastwrd;j++)
							{
								for(k=j;k<lastwrd;k++)
								{
									v+=verb[k];
									//cout<<verb[k]<<" ";
									//break;
								}
								//cout<<v<<endl;
								
							
								for(i=0;i<200;i++)
								{
									
									for(j2=0;j2<200;j2++)
									{
										
										//cout<<tamword[i][j2]<<" ";
										if(tamword[i][j2]==v)
										{
											//cout<<v<<" ";
											if(tamword[i][j2+1]==vaux)
											{
												how++;
												//cout<<tamword[i][j+1];
												if(how==1)
												{
													//cout<<tamword[i][j]<<" "<<tamword[i][j+1]<<" ";
													cout<<tamword[i][0]<<"";
													break;
												}
											}
										}
										
									}	
								}
								v="\0";
							}
							
        					}
        					else if(which==2)
        					{
        						//cout<<hw1[1][i]<<" ";
        						string v;
        						//fs=0;
	 						for(j=0;j<4;j++)
	 						{
	 							cout<<verb[j];	
	 						}
	 						cout<<"_1-";
	 						
	 						/*if(hw1[1][i+1]=="hE")
	 						{
	 							//cout<<hw1[1][i+1];
	 						
		 						//string v;
		 						for(j=(lastwrd-4);j<(lastwrd-2);j++)
		 						{
		 							
		 							v+=verb[j];
		 						}
		 						//cout<<v;
		 						
		 					}
		 					else
							{
								fs=1;
								//string v;
								for(j=(lastwrd-4);j<lastwrd;j++)
								{
									
									if(j==(lastwrd-2))
									{
										v+=" ";
									}
									v+=verb[j];
								}
								//cout<<v;
							}*/
							
							//cout<<lastwrd;
							
							
								i=0;
								tamfile >> word;
								while(!tamfile.eof())
								{
									getline(tamfile,lin);
									stringstream s(lin);
									j=0;
									while(s >> word)
		 							{
		 								tamword[i][j]=word;
							 			//cout<<tamword[i][j]<<" ";			
							 			j++;
							 			 
							  		}
							 		i++;
								}
							int how=0;
								//cout<<i<<(i+1);
							for(j=0;j<lastwrd;j++)
							{
								for(k=j;k<lastwrd;k++)
								{
									v+=verb[k];
									//cout<<verb[k]<<" ";
									//break;
								}
								//cout<<v<<endl;
								
							
								for(i=0;i<200;i++)
								{
									
									for(j2=0;j2<200;j2++)
									{
										
										//cout<<tamword[i][j2]<<" ";
										if(tamword[i][j2]==v)
										{
											if(tamword[i][j2+1]==vaux)
											{
												how++;
												//cout<<tamword[i][j+1];
												if(how==1)
												{
													//cout<<tamword[i][j]<<" "<<tamword[i][j+1]<<" ";
													cout<<tamword[i][0]<<"";
													break;
												}
											}
										}
										
									}	
								}
								v="\0";
							}
							
        					}
        					else if(which==3)
        					{
        						string v;
        						i=0;
								tamfile >> word;
								while(!tamfile.eof())
								{
									getline(tamfile,lin);
									stringstream s(lin);
									j=0;
									while(s >> word)
		 							{
		 								tamword[i][j]=word;
							 			//cout<<tamword[i][j]<<" ";			
							 			j++;
							 			 
							  		}
							 		i++;
								}
							int how=0;
								//cout<<i<<(i+1);
							if((vaux=="hE") || (vaux=="hEM") || (vaux=="ho"))
							{
								cout<<"state_copula-pres";
							}
							else if((vaux=="WA") || (vaux=="WI") || (vaux=="We") || (vaux=="WeM") || (vaux=="WIM"))
							{
								cout<<"state_copula-past";
							}
							else
							{
								for(j=0;j<lastwrd;j++)
								{
									for(k=j;k<lastwrd;k++)
									{
										v+=verb[k];
										//cout<<verb[k]<<" ";
										//break;
									}
									//cout<<v<<endl;
									
								
									for(i=0;i<200;i++)
									{
										
										for(j2=0;j2<200;j2++)
										{
											
											//cout<<tamword[i][j2]<<" ";
											if(tamword[i][j2]==v)
											{
												//cout<<v<<" ";
												
													how++;
													//cout<<tamword[i][j+1];
													if(how==1)
													{
														//cout<<tamword[i][j]<<" "<<tamword[i][j+1]<<" ";
														cout<<tamword[i][0]<<"";
														break;
													}
												
											}
											
										}	
									}
									v="\0";
								}	
							}	
        					}			
        				}
        				else if(w[i][2]=="PRP")
        				{
        					cout<<wrdarr[i][0]<<",";
        				}
        				else
        				{
        					/*if(com[i+1]=="1")
        					{
        						cout<<wrdarr[i][0]+"_1";
        					}*/
        					 if( (w[i+1][6]=="lwg__psp"))
        					{
        						cout<<wrdarr[i][0]+"_1,";
        						//dicwrd[0][l]=w[i][0];
							dicwrd[1][l]=(i+1);
							l++;
        					}
        					else
        					{
        						//dicwrd[0][l]=w[i][0];
							dicwrd[1][l]=(i+1);
							//cout<<l<<" "<<dicwrd[1][l];
							l++;
        						cout<<wrdarr[i][0]+"_1"<<",";
        					}
        				}
        			}
        			
        		}
        		
        		
        		//file dict finding
        		
        		{
       				infile >> word;
				while(!infile.eof())
    				{
        				getline(infile,lin);
					//cout<<lin<<endl;
					stringstream s(lin);
					while(s >> word)
 					{
        		
        					for(i=0;i<(cnt-1);i++)
        					{
        						if((w[i][6]!="lwg__psp") && (w[i][6]!="rsym"))
        						{
        							if(word==(wrdarr[i][0]+"_1"))
        							{
        								//cout<<wrdarr[i][0]<<" ";
        								//cout<<wrdarr[i][0]<<" ";
        								//cout<<word<<" ";
        								wrdarr[i][1]="1";
									//cout<<i;
									//cout<<wrdarr[i][1];
								}
								/*else
								{
									wrdarr[i][1]="0";
									cout<<wrdarr[i][1];
								}*/
							}
        					}
        				}
    				}
       				//cout<<buffer;
       			}
    		}

	//delete[] buffer;
	}
	
	
	/*for(i=0;i<cnt;i++)
	{
		cout<<i<<":"<<com[i]<<endl;
	}*/
	
//ROW 4 (INDEXING)

	
	
	int grp=0;
	j=1;
	cout<<endl;
	
	for(i=0;i<cnt;i++)
	{
		if(com[i]=="1")
		{
			if(w[i][6]=="main")
			{
				cout<<j;
			}
			else
			{
				cout<<j<<",";
			}
			j++;
		}	
	}	
	grp=cnt;
	cnt=j;
	//cout<<cnt;
	
	//cout<<dicwrd[1][3];
	k=1;
	dicwrdindex = l;
	for(i=1;i<l;i++)
	{
		kop1=dicwrd[1][i];
		if(com[kop1-1]=="1")
		{
			dicwrd[0][i]=k;
			k++;	
		}
		else
		{
			dicwrd[0][i]=k;
		}
		
		//cout<<i<<" "<<dicwrd[0][i]<<" "<<dicwrd[1][i]<<endl;
	}
	
	
	
	
//OPEN PRUNE FILE

string arr3[20],arr1[20],arr2[20],w3[200][200],w1[200][200],w2[200][200],hw[2][30];
 i=0,j,k=0;
//static string com[20];

int cntwrd=0;
string prunearr[20][200];

//wx and hindi in an array
	fstream f3,f1,f2;
	

 	for(i=0;i<30;i++)
 	{
 		w1[0][i]=w[i][0];
 	}
 	/*for(i=0;i<20;i++)
	{
		//for(j=0;j<20;j++)
		{
			cout<<w1[0][i]<<" ";
		}
	}*/
 	
//wx file	
	string fname2;
	fname2 = "wx.txt";
 	f2.open(fname2.c_str());
	//while(f2 >> tmp)
 	{
 		getline(f2,lin);
 		//cout<<lin<<endl;
 		arr2[i]=lin;
 		stringstream s(lin);
 		j=0;
 		while(s >> wrd)
 		{
 			w2[0][j]=wrd;
 			j++; 
  		}
 	}
	/*for(i=0;i<20;i++)
	{
		for(j=0;j<20;j++)
		{
			cout<<w2[i][j]<<" ";
		}
	}*/
	
//hindi-wx in an array

	for(j=0;j<20;j++)		
	{
		hw[0][j]=w1[0][j];
	}
	for(j=0;j<20;j++)		
	{
		hw[1][j]=w2[0][j];
	}
	/*for(i=0;i<30;i++)
	{
		//cout<<"hey";
		cout<<hw[0][i]<<" ";
	}
	for(i=0;i<30;i++)
	{
		//cout<<"hey";
		cout<<hw[1][i]<<" ";
	}*/

//pruning 
	i=0,j=0;
	int found=0;
	counter=0;
 	cout<<endl;
 	//fstream f;
 	string fname3; //word,
 	fname3 = "prune-output.txt";
 	f3.open(fname3.c_str());
 	
 	while(f3 >> tmp)
 	{
 		getline(f3,lin);
 		//cout<<lin<<endl;
 		arr3[i]=lin;
 		stringstream s(lin);
 		j=0;
 		while(s >> wrd)
 		{
 			w3[i][j]=wrd;
 			//cout<<w3[i][j]<<" ";
 			if(w3[i][j]=="Output:")
 			{
 				//cout<<w3[i][j]<<" ";
 				counter++;
 				if(counter==2)
 				{
 					found=i;
 				}
 			}
 			j++; 
  		}
 		i++;
 		
 	}
 	//cout<<found;
 	//cout<<w3[20][0];
 	
 	
 //ROW 5(SEMANTICS)
 
 	countdic=0;
 	counter=0;
 	for(i=0;i<200;i++)
 	{
 		for(j=0;j<20000;j++)
 		{
 			if(w3[i][j]=="Output:")
		 	{
		 		counter++;
 				if(counter==3)
 				{
 					for(k=i+2,j2=0;k<20,j2<grp;k++,j2++)
 					{
 						if(w3[k][j+4]!=" ")
 						{
 							//cout<<j2<<" ";
 							
 							//cout<<w3[k][j+4]<<" ";
 							string parsed,input=w3[k][j+4];
							stringstream ssin(input);
							l=0;
							while(getline(ssin,parsed,'\''))
							{
								
								l++;
								if(l==2)
								{
									//cout<<parsed<<" ";
									if(parsed=="person")
									{
										cout<<"per";
									}
									else if(parsed=="location")
									{
										cout<<"loc";
									}
									else if(parsed=="organization")
									{
										cout<<"org";
									}
									
								}
								
							}
							if((w[j2][6]=="pof") || (w[j2][6]=="pof__cn"))
 							{
 							
 							}
							else if(com[j2]=="1")
 							{
 								countdic++;
								if(countdic==(cnt-1))
								{
								
								}
								else
								{
									cout<<",";
								}
 							}
 							
 						}
 					}
 				}
		 		//cout<<w3[i][j]<<" ";
		 	}
		 }
	}
 
 	cout<<endl;
 	
 	
//ROW 6(GNP)

	
	k=0,l=0;
	counter=0;
	int group[600],p=0;	
	for(i=0;i<grp;i++)
	{
		for(j=0;j<grp;j++)
		{
			
			if((w[i][6]=="r6") || (w[i][6]=="k7") || (w[i][6]=="k1") || (w[i][6]=="k2") || (w[i][6]=="k7p") || (w[i][6]=="ras-k1") || (w[i][6]=="k2p") || (w[i][6]=="r6-k2") || (w[i][6]=="k5") || (w[i][6]=="rt") )		//|| (w[i][6]=="k1s") 
			{
				
		 		//cout<< w[j][1];
		 		//cout<<w[i][1];
		 		if(w[i][1]==hw[0][j])
		 		{
		 			
		 			//cout<<hw[0][j];
		 			//cout<<j<<" "<<p<<" ";
		 			
		 			for(i1=(found+2);i1<200;i1++)
					{
						//cout<<i1;
						for(j2=0;j2<100000;j2++)
						{		//cout<<w3[19][j2];			
	 						if(w3[i1][j2]==hw[1][j])	
	 						{
	 							//counter++;
	 							//cout<<hw[1][j];
	 							//cout<<i1<<" ";
	 							//cout<<hw[0][j];
	 							//cout<<w3[i1][j2]<<endl;
	 							//if(counter==0)
	 							{
	 								string parsed,input=w3[i1][j2+3];
									stringstream ssin(input);
									//cout<<input<<endl;
									k=0;
									while(getline(ssin,parsed,','))
									{
										//cout<<l<<"."<<k<<"-"<<parsed<<endl;
										prunearr[l][k] = parsed;
										k++;
										group[l]=j;
										//cout<<j;
										//cout<<k;
										kop1=l;	
									}
									l++;	
	 							}
	 							//counter++;
	 							
	 						}
	 						break;
	 					}
		 			}
		 			//counter=0;
		 		}
		 	
		 	}
		}
	}
	//cout<<cnt;
	//cout<<j;
	/*for(i=0;i<=kop1;i+=2)
	{
		cout<<i<<":"<<group[i]<<endl;
	}*/
	countdic=0;
 	i=0;
 	for(j=0;j<grp;j++)
 	{
 		if(group[i]==j)
 		{
 					cout<<"[";
					if(prunearr[i][2]!="")
					{
						//cout<<prunearr[i][2];
						if(prunearr[i][2]=="any")
						{
							cout<<"-";
						}
						else
						{
							cout<<prunearr[i][2];
						}
					}
					else
					{
						cout<<"-";
					}
					cout<<" ";
					if(prunearr[i][3]!="")
					{
						//cout<<prunearr[i][3];
						if(prunearr[i][3]=="any")
						{
							cout<<"-";
						}
						else
						{
							cout<<prunearr[i][3];
						}
					}
					else
					{
						cout<<"-";
					}
					cout<<" ";
					if(prunearr[i][4]!="")
					{
						//cout<<prunearr[i][4];
						if(prunearr[i][4]=="1")
						{
							cout<<"u";
						}
						if(prunearr[i][4]=="2")
						{
							cout<<"m";
						}
						if(prunearr[i][4]=="3")
						{
							cout<<"a";
						}
						if(prunearr[i][4]=="any")
						{
							cout<<"-";
						}
					}
					else
					{
						cout<<"-";
					}
					cout<<"],";
					i+=2;
 		}
 		else if(com[j]=="1")
 		{
 			countdic++;
			if(w[j][6]=="main")	//(countdic==(grp-1))
			{
			
			}
			else
			{
				cout<<",";
			}
 		}
 	}


//ROW 7 (DEPENDENCY RELATIONS)

	cout<<endl;
	countdic=0;
	for(i=0;i<20;i++)
	{
		for(j=0;j<20;j++)
		{
			if(w[i][j]=="VM")		//FINDING MAIN VERB
			{
				kop=(i+1);
			}
		}
	}
	
	
	
	for(i=0;i<grp;i++)
	{
		stringstream x(w[i][5]);
		int b;
		x>>b;
		if(w[i+1][6]=="rsym")
		{
		
		}
		else if((w[i][6]=="nmod__adj") || (w[i][6]=="adv") || (w[i][6]=="pof__cn") || (w[i][6]=="jjmod__intf") || (w[i][6]=="r6"))
		{
			for(j=1;j<dicwrdindex;j++)
			{	
				if(dicwrd[1][j]==b)
				{
					//cout<<b<<" ";
					//cout<<j<<"h";
					mainie=dicwrd[0][j];
					pof=j;
					break;
				}
			}
			
			if(w[i][2]=="QC")
			{
				cout<<mainie<<":"<<"card"<<" ";
			}
			else if(w[i][2]=="QO")
			{
				cout<<mainie<<":"<<"ord"<<" ";
			}
			else if(w[i][6]=="adv")
			{
				cout<<mainie<<":"<<"kr_vn"<<" ";
			}
			else if(w[i][6]=="nmod__adj")
			{
				//cout<<b<<" ";
				cout<<mainie<<":"<<"mod"<<" ";
			}
			else if(w[i][6]=="pof__cn")
			{
				//cout<<b<<" ";
				cout<<mainie<<"."<<(i+1)<<"/"<<mainie<<"."<<j<<":"<<"pof__cn"<<" ";
			}
			else
			{
				cout<<mainie<<":"<<w[i][6]<<" ";
			}
		}
		else if((b==kop && w[i][6]!="pof" && w[i][6]!="rsym" && w[i][6]!="lwg__vaux" && w[i][6]!="lwg__vaux_cont"))
		{
			for(j=1;j<dicwrdindex;j++)
			{	
				if(dicwrd[1][j]==b)
				{
					//cout<<b<<" ";
					//cout<<j<<"h";
					mainie=dicwrd[0][j];
					pof=j;
					break;
				}
			}
			if(((w[i][6]=="k1") &&(w[i+1][6]=="k1s"))  && (w[i][5]==w[i+1][5]))
			{
				cout<<"samAnAXi,samAnAXi";
			}
			else if(w[i][6]=="k1s")
			{
			
			}
			else
			{
				cout<<mainie<<":"<<w[i][6]<<" ";
			}
		}
		if((com[i]=="1") && (w[i+1][6]!="rsym"))
		{
			countdic++;
			if(countdic==(cnt-1))
			{
			
			}
			else
			{
				cout<<",";
			}
		}
	}


//ROW 8 (DISCOURSE RELATIONS)

	cout<<endl;
	countdic=0;
	for(i=0;i<grp;i++)
	{
		if(com[i]=="1")
		{
			countdic++;
			if(countdic==(cnt-1))
			{
			
			}
			else
			{
				cout<<",";
			}
		}
	}
	
		
		
		
//ROW 9 (SPEAKER'S VIEW)
	
	
	cout<<endl;
	countdic=0;
	for(i=0;i<grp;i++)
	{
		stringstream x(w[i][5]);
		int b;
		x>>b;
		if((w[i][6]=="lwg__rp") || (w[i][6]=="lwg__neg"))
		{
			for(j=1;j<dicwrdindex;j++)
			{	
				if(dicwrd[1][j]==b)
				{
					//cout<<b<<" ";
					//cout<<j<<"h";
					mainie=dicwrd[0][j];
					pof=j;
					break;
				}
			}
			if((w[i][6]=="lwg__neg"))
			{
				cout<<mainie<<"O:"<<"neg";
			}
			if((w[i][6]=="lwg__rp"))
			{
				cout<<mainie<<":"<<hw1[1][i];
			}
		}
		else if(com[i]=="1")
		{
			countdic++;
			if(countdic==(cnt-1))
			{
			
			}
			else
			{
				cout<<",";
			}
		}
	}


//ROW 10 (SCOPE)
	
	cout<<endl;
	//cout<<cnt;
	countdic=0;
	for(i=0;i<grp;i++)
	{
		if(com[i]=="1")
		{
			countdic++;
			if(countdic==(cnt-1))
			{
			
			}
			else
			{
				cout<<",";
			}
		}
	}
	
	
//ROW 11 (TYPE OF SENTENCE)

	cout<<endl;
	fs=0;
	//cout<<w[(cnt-1)][0];
	stringstream x(w[grp-1][0]);
	string h;
	x>>h;
	//cout<<h;
	if(h=="?")
	{
		cout<<"interrogative ";
	}
	/*if(h=="!")
	{
		cout<<"exclamatory ";
	}*/
	/*if((h=="|") || (h==".") || (h=="।"))
	{
		cout<<"declarative(positive) ";
	}
	else
	{*/
		for(i=0;i<=grp;i++)
		{	
			if(((w[i][0]=="नही") || (w[i][0]=="नहीं")))
			{
				//cout<<w[i][0];
				cout<<"negative";
				fs=1;	
			}
		}
		if(fs==0)
		{
			if((h=="|") || (h==".") || (h=="।"))
			{
				cout<<"affirmative";
			}
		}
			
				
	cout<<endl;	


//PRINT WARNING OF ROW 3 (WORDS NOT FOUND IN DICTIONARY)
	//cout<<unavl;
	for(j=0;j<unavl;j++)
        {
        	if((w[j][6]!="lwg__psp") && (w[j][6]!="rsym") && (w[j][2]!="NNP") && (w[j][2]!="NNPC") && (w[j][2]!="PRP"))
        	{
	     		if(wrdarr[j][1]!="1")
	     		{
				cout<<"[Warning: ";
				for(i=0;i<unavl;i++)
				{
					if((w[i][6]!="lwg__psp") && (w[i][6]!="rsym") && (w[i][2]!="NNP") && (w[i][2]!="NNPC") && (w[i][2]!="PRP"))
					{
				     		if(wrdarr[i][1]!="1")
				     		{
				     			cout<<wrdarr[i][0]+"_1"<<" ";
				     		}
				       }
				 }
				 cout<<"not found in dictionary.]";
				 cout<<endl;
				 break;
			}
		}
	}

	return 0;
}
