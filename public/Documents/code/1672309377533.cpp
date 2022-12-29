#include <stdio.h>
#include <string.h>
#include <math.h>
int main(){
  int sbd,ns;
  float toan,ly,hoa;
  char hoten[50], gt[10];
  
  printf("So bao danh: ");
  scanf("%d", &sbd);
  printf("Ho va ten: ");
  fflush(stdin);
  gets(hoten);
  printf("Gioi tinh: ");
  scanf("%s", gt);
  printf("Nam sinh: ");
  scanf("%d", &ns);
  printf("Diem toan: ");
  scanf("%f", &toan);
  printf("Diem ly: ");
  scanf("%f", &ly);
  printf("Diem hoa: ");
  scanf("%f", &hoa);
  
  printf("\nThi sinh vua nhap la: \n");
  printf("So bao danh: %d\n", sbd);
  printf("Ho va ten: %s\n", hoten);
  printf("Gioi tinh: %s\n", gt);
  printf("Nam sinh: %d\n", ns);
  printf("Diem toan: %.2f\n", toan);
  printf("Diem ly: %.2f\n", ly);
  printf("Diem hoa: %.2f\n", hoa);  
  
  return 0;
}

