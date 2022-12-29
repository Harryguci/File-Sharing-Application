#include <stdio.h>
#include <math.h>
int main(){
	int n, i, count = 0;
	printf("n = ");
	scanf("%d", &n);
	
	for (i = 1; i <= n; i++) {
		if (n % i == 0) {
			count++;
		}
	}
	
	if(count > 2) {
		printf("Khong phai SNT");
	} else
		printf("La SNT");
	
	return 0;
}

