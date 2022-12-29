#include <iostream>
#include <string>
#include <math.h>
#include <algorithm>

using namespace std;
class PS {
private:
	int ts, ms;
public:
	PS() {
		ts = ms = 0;
	}
	PS(int a, int b) {
		ts = a;
		ms = b;
	}
	int getTS() {
		return ts;
	}
	int getMS() {
		return ms;
	}
	void handle(){
		int gcd = __gcd(ts, ms);
		ts /= gcd;
		ms /= gcd;
	}
	friend istream& operator >> (istream& is, PS& A) {
		cout << "Tu so: "; is >> A.ts;
		cout << "Mau so: "; is >> A.ms;
		return is;
	}
	friend ostream& operator << (ostream& os, PS A) {
		os << A.ts << "/" << A.ms;
		return os;
	}
	friend PS& operator*(PS A, PS B) {
		A.ts *= B.ts;
		A.ms *= B.ms;
		A.handle();
		
		return A;
	}
	friend PS& operator+(PS A, PS B) {
		PS temp = A;
		temp.ts *= B.ms;
		temp.ms *= B.ms;
		B.ts *= A.ms;
		B.ms *= A.ms;
		
		temp.ts += B.ts;
		temp.handle();
		return temp;
	}
	friend PS& operator-(PS A, PS B) {
		B = B * PS(-1,1);
		A = A + B;
		return A;
	}
	friend PS& operator/(PS A, PS B) {
		if (B.getTS()) {
			PS res(B.getMS(), B.getTS());
			res = res * A;
			return res;
		}
		else
			return A;
	}
};

class DT {
private:
	int level;
	double* arr;
public:
	DT() {
		level = 0;
		arr = NULL;
	}
	DT(int n) {
		level = n;
		arr = new double[n];
	}
	int getLevel() {
		return level;
	}
	void input() {
		cout << "Nhap bac da thuc: "; cin >> level;
		cout << "Nhap cac he so: ";
		arr = new double[level + 1];
		for (int i = 0; i <= level; i++) {
			cin >> arr[i];
		}
	}
	void display() {
		int curr = level;
		
		for (int i = 0; i <= level; i++) {
			if (i < level)
				cout << arr[i] << ".x^" << curr-- << " + ";
			else
				cout << arr[i];
		}
	}
	double Calc(double x) {
		int curr = level;
		double res = 0;
		for (int i = 0; i <= level; i++) {
			res += arr[i] * pow(x, curr--);
		}
		
		return res;
	}
	
	double operator() (double x) {
		return Calc(x);	
	}
};

int main() {
	DT dt1;
	dt1.input();
	dt1.display();
	double x;
	cout << endl << "Nhap gia tri x = "; 
	cin >> x;
	cout << "P(" << x << ") = " << dt1(x);
	
	return 0;
}
