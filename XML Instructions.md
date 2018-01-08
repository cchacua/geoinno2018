# Instructions to convert the html file to a Word file, and keeping the Index marks
1. Open the html document, downloaded from [https://cchacua.github.io/geoinno2018/#/views/program_2](https://cchacua.github.io/geoinno2018/#/views/program_2), in Word
2. Copy all the tables in a new word document
3. Dissable the spell check
4. Change the extension of the word document from `.docx` to `.zip`
5. Extract the file to a new folder
6. Open `./word/document.xml` with an advanced text editor (notepad++, Atom, etc.)
7. Replace `___` by ` `
8. Replace `//C//` by `, `
9. Replace `#X3$$%` by 
```xml
</w:t></w:r><w:r><w:fldChar w:fldCharType="begin"/></w:r><w:r><w:instrText xml:space="preserve"> XE "</w:instrText></w:r><w:r><w:instrText>
```
10. Replace `*X3$$%</w:t></w:r>` by 
``` xml
</w:instrText></w:r><w:r><w:instrText xml:space="preserve">" </w:instrText></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r>
```
11. Replace `*X3$$%===` by     
``` xml
</w:instrText></w:r><w:r><w:instrText xml:space="preserve">" </w:instrText></w:r><w:r><w:fldChar w:fldCharType="end"/></w:r><w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:noProof/><w:color w:val="000000"/><w:sz w:val="21"/><w:szCs w:val="21"/></w:rPr><w:t>, 
```
12. Replace a similar block, begining with `//C` and ending with `//` 
```xml
//C</w:t></w:r><w:r w:rsidRPr="00807F5D"><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:noProof/><w:color w:val="000000"/><w:sz w:val="21"/><w:szCs w:val="21"/><w:lang w:val="en-GB"/></w:rPr><w:lastRenderedPageBreak/><w:t>//
```
by `, `. Usually, there is just one case like this.

13. Zip de document again, preserving the same structure (verify that the main folder is the root folder)

14. Change extension of the zip file, `.zip`, to `.docx`    
