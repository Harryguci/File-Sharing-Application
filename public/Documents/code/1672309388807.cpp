#include <stdio.h>
#include <math.h>
int main(){
	float a, b, res;
	char c;
	
	printf("Nhap bieu thuc: ");
	scanf("%f%f", &a, &b);
	fflush(stdin);
	scanf("%c", &c);

	switch(c) {
		case '+':
			res = a + b;
			break;
		case '-':
			res = a - b;
			break;
		case '*':
			res = a * b;
			break;
		case '/':
			res = a / b;
			break;
	}
	
	printf("\nKet qua: %.2f", res);
}

