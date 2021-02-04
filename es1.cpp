#include<iostream>
#include<ctime>
#include<cstdlib>
using namespace std;
int main(){
	int a;
	int v[30];
	for (int i=0; i<30;i++){
			srand(time(NULL));
			int b=rand();
			a=b%1000;
			for(int c=0; c<i; c++){
				if( a!=v[c])
					return true;
				
				else	
					return false;
					i=i-1;
				
				
				
			while (true){
				v[i]=a;
				};
				};
			for (int i=0;i<30;i++){
		cout<<v[i]<<endl;
	};
	};
	
}
