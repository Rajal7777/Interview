const name = "rajal";
/*

English Explanation
 Time Complexity: \(O(N)\)str.slice(1) has to copy the remaining \(N-1\) characters of the string into a new string, where \[N\] is the length of the string. This requires linear time. 

Space Complexity: \(O(N)\)In JavaScript, strings are immutable. Modifying a string creates a brand-new string in memory. The newly created string requires \(O(N)\) space.

 日本語での解説 (Japanese Explanation) 
時間計算量: \(O(N)\)str.slice(1) は、文字列の長さ \[N\] に対して残りの \(N-1\) 文字をコピーして新しい文字列を作成するため、線形時間（文字列の長さに比例する時間）がかかります。

 空間計算量: \(O(N)\)JavaScriptの文字列は不変（イミュータブル）です。文字列を操作するとメモリ上に新しい文字列が生成されるため、新しく作成された文字列分のメモリスペース（\(O(N)\)）が必要になります。
*/

console.log(capitalize(name));
//This is the standard approach. It extracts the first character, converts it to uppercase, and appends the rest of the string.


/*

時間計算量: \(O(N)\)メソッド1と同様に、slice(1) が残りの文字列を走査・コピーするため、文字列の長さに比例した時間がかかります。
 空間計算量: \(O(N)\)テンプレートリテラルによって長さ \[N\] の新しい文字列が新しくメモリに割り当てられるためです。
*/
function capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1);

}

const capitalizeModern = str => str ? `${str[0].toUpperCase()}${str.slice(1)}` : "";

console.log(capitalizeModern("javascript")); // "Javascript"
