https://ask.csdn.net/questions/7364673

line 14 of themes\academic\layouts\publication\single.html

Change line 14 in above file from

 {{ if (.Params.publication_types) and (ne (index .Params.publication_types 0) "0") }}

to

{{ if and (.Params.publication_types) (ne (index .Params.publication_types 0) "0") }}
