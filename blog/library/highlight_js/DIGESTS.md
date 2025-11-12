## Subresource Integrity

If you are loading Highlight.js via CDN you may wish to use [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) to guarantee that you are using a legimitate build of the library.

To do this you simply need to add the `integrity` attribute for each JavaScript file you download via CDN. These digests are used by the browser to confirm the files downloaded have not been modified.

```html
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/highlight.min.js"
  integrity="sha384-5xdYoZ0Lt6Jw8GFfRP91J0jaOVUq7DGI1J5wIyNi0D+eHVdfUwHR4gW6kPsw489E"></script>
<!-- including any other grammars you might need to load -->
<script
  src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/languages/go.min.js"
  integrity="sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH"></script>
```

The full list of digests for every file can be found below.

### Digests

```
sha384-G3c8SNZYjR6jFPYkQxQDgYhzlaj4olCEySxxCnqKYBz3jcHODQ+RZQyyFGnM6ZTM /es/languages/accesslog.js
sha384-UetTFEKURO3tHQVj0YC0xP9Lo84vGmqippXzOpf96Awpk5fTIJ1lrKDBZWj5LqXa /es/languages/accesslog.min.js
sha384-QTDtPWugT5ylY4BegCLYLiNE4eMBrlFVNCv5RjiUQCBChC/v9fi9U1q76ZzrSAvA /es/languages/apache.js
sha384-HPrpX+j31X1o9T5eF99pY7R2u5y8udMGQ5YFLMxlVqNmBsLu2vesOPKXGzEiNKcr /es/languages/apache.min.js
sha384-DZ/QAiGsDoaeLPHAnnWQ+KAi+ISBMQ1jorfzWY5B6Nck/LEW5BrlynsA7GqEwyq4 /es/languages/arduino.js
sha384-5fqRyRDjJwFL5ud85A5a43LTiHQYvuRA8aoZQfQmjEKTQzQ58xBXhKVxno6hb/yS /es/languages/arduino.min.js
sha384-+QLqOzVprIbDNiTtALJ0CqYF9lCa5YNGtiQE3WogL8TVStFdTMgpkWFBbVdDnj1W /es/languages/asciidoc.js
sha384-3p/AcS9vjLxqOK7hnymyAfIV1SJlGE0eW/iTNNfV56XtUc9kqpliCe3yJL7yZ2R3 /es/languages/asciidoc.min.js
sha384-gRTR/fmk+6+ygbihH/fJvHgmffnOrd/eO7DW5zgu1uN9GBohtDx+OBs0DI0ejigB /es/languages/bash.js
sha384-Pg7b9hYE6kefjcNqAabhv8jOLCVoZubUaM4bZFjUJd0CaaQ14ksDI0GVllMtAF4S /es/languages/bash.min.js
sha384-pu3w7lNNLUB7buFlFR3L+AtF9q3nSSOIJgO0esuKoqUfUqD6scWh1qmaDyDlN//N /es/languages/brainfuck.js
sha384-5Di+hEgBSRkJwSrjHMQIs2QIwae05Eskbb7kizfL3EbgrGoeA9hxFwf52yTj5qHg /es/languages/brainfuck.min.js
sha384-xhohaHGp8S443Qn4JZUYAcKqIIl0bQkFA79EUxpbX8GWb5oufdvvSI9ipl/Dasev /es/languages/c.js
sha384-xaTVEdq02jgKStoYDcZD8NhTN1XV/TWpIu4OM53MtMiLl08+e9YJNENo+R/6Nwp0 /es/languages/c.min.js
sha384-rFCBWxbZHxZD51qKR2cdayIcKUSHS3p1PWPIs1kjgsP7lu9ZP32ah/2DoQUm/rTg /es/languages/cpp.js
sha384-+1Koxl0St78gEZW5CpFK+dbLp7yNsfwLzzQUsSGimV4k/RVJUz6YvqtsqtdbJyKf /es/languages/cpp.min.js
sha384-0s8f7nphuRu8IIkFNCeOVZhvbjt7YKZEHl38OjfkCkdtnwIUvwRNbxxUHkCdcYjm /es/languages/csharp.js
sha384-xLfGW0hIBHie9xNFuVroNihI0BdEO8FKxOeCdyJBrO1eM7s5BsQ8F3fLtFydQZ+Z /es/languages/csharp.min.js
sha384-Gmvct15f4Mo9AXQG5bk5w78N1YjBLXXU3KIV7no+mOVnApXlwfw1dwjfueAwljIV /es/languages/css.js
sha384-1D7DbOic0Z5nM2ldSO9O/EsBfsg/5x7X7So1qnMgscI2ucDevptcg7cTvrD9rL0D /es/languages/css.min.js
sha384-2JWkG0RxwUVIplguSh0wqy72AdJTl3UnuY2FVJePb6kHsj5MNf85BjqsHRbLJFSP /es/languages/dns.js
sha384-awuLaeTnQUKMFxA81452r437c+WlKf1OGhsqRp3TG5i40wpQQe9w3ntPitWEfVcN /es/languages/dns.min.js
sha384-GjF+59AA+OY/6RDsvWxm3u318l0CruHb/Fm3oywrHZWho96FKyPUFnoIKqCKiM4D /es/languages/dockerfile.js
sha384-qyGdaK2usg+DEmSJUcr3Rogi6miy7A1Rn8QlRc71wBlMHpN1Y4b3d8hh2hf31dCu /es/languages/dockerfile.min.js
sha384-GqZqtbpWFWVmdKIFq+dypg6TLugbGe0F5kegnREhdNHPd6kZ4akNq9W4xJ5peE6o /es/languages/dsconfig.js
sha384-crsqi4l7RdxidD6oicLW9AEb0v0F9FgySo2wRxI7rUi9uqhrox+vjtEsUsLmjnEI /es/languages/dsconfig.min.js
sha384-OE+CvsowKJt5L9HBs/Im5HElarFI6C2S7L+Ar0BCr+UfH9L+/GUlfSglVZDpMYmn /es/languages/erlang.js
sha384-4XvKs9FWdMZFUIHDBodcg+dK+cMy0apR3a2FnYO21omft3i1Ucx++DDGbZRnXCZO /es/languages/erlang.min.js
sha384-R0+GK/lkizVo8grKxYjl+obl3tvk43iOTFY58pPXObdF9JB7BB28jC/UKhZ7FTXO /es/languages/excel.js
sha384-PBfTDnXKYjfADHHbN2T7cmoiM0HI3MkM2+MczeGYiXBZE05RoSDZtGotmT/gm0gc /es/languages/excel.min.js
sha384-QhpRZLeHeNpi6mc0tQD8EPA3ngl6rRNrRFIP2L/+5xw4CAsB6i4XfsybfFBrgSBa /es/languages/fortran.js
sha384-A3+PvZy70E3+xm6wPPF7V67hbjr+poCeuK2CMSUJmhZcFvszluhlVveb2P7VCDBJ /es/languages/fortran.min.js
sha384-y5tpDG/EgM93k2unGm4XFn8l9V12Ru1tnk2TxhduZWqrEqAK86BQlDLuVAILe3OB /es/languages/go.js
sha384-/UGh0AcfdC41Di2LsNVYCPOJ24RfaUWWXniaZoGuM52DaQR7fwStKAHJumI+u5yY /es/languages/go.min.js
sha384-uC39e4pRTIrenlpo9NQf2taOPhdRJNaZLFASSg+Q8BLjYqLXvxL8brjzQmJEQ0qn /es/languages/http.js
sha384-36ZwsK42N/jk3DquJeJr/r/oziBOtUxBcg0ZdTaaEDX+Zo/UMgBP4S2Sf4NEyq1y /es/languages/http.min.js
sha384-vZWLk+C+23/W/GAmv4PXkZSZo82LXul6DdSgWcMzutPxGltitIk38HyLrxRVsFvm /es/languages/ini.js
sha384-CVynu7LzwkkAUiajSi0jprssYhgg9Vi1WSd8iR84Vmi6JdRGq3DT4vvEfjzoxxOK /es/languages/ini.min.js
sha384-lk+aAr+DNq8Rz3hXPSZ7ga38GS+tQfXDvexuUnyDCSju1t1SAsLipVIFGlRtcUjE /es/languages/java.js
sha384-5GpB6kfA2w03pZhAUmmNSYvR5pLvne/Rzqc22BmHv+t9ES7ifMX/ZE7x5TBeqW4d /es/languages/java.min.js
sha384-g7t9fKR5Tvod4iWv7BQXN+/JMn5GT9sD6FG3h7Fgl+KCv5k4NnnCzEqUe7BMJ9Mv /es/languages/javascript.js
sha384-f7huPivS1dV2T5V+g0aJpgsY7WBHWCsioIq30tpNoXGizD65fWJYGuXXVPNI52VB /es/languages/javascript.min.js
sha384-8CRS96Xb/ZkZlQU+5ffA03XTN6/xY40QAnsXKB0Y+ow1vza1LAkRNPSrZqGSNo53 /es/languages/json.js
sha384-UHzaYxI/rAo84TEK3WlG15gVfPk49XKax76Ccn9qPWYbUxePCEHxjGkV+xp9HcS/ /es/languages/json.min.js
sha384-74O59Gvm0duu3aXH7S8RHhqn8YvAF1JlgCdNDq5MaClY/f/0bMs4zryv55Whwp2c /es/languages/kotlin.js
sha384-+aJFpyNBGTRiXRDN6BLrctauQBKExwSosxOiHLUYReXKTsckW/RgMavqX6W+zTBL /es/languages/kotlin.min.js
sha384-Ap4gnRYGNAeKXru7neutEvzrhsYnnP1suT5zxW2zdmv6rCl43QzqqLEJ1F3kZWWm /es/languages/latex.js
sha384-bx4oC5pPCnrSzdPzDg3L9UsoJWiptFFwoGWKup6bRk82EzPFrquQa7T7I9iDwnXa /es/languages/latex.min.js
sha384-GSGd4G9IDg7LPIIpfZuqfVsqOxYND9rvc1BKkv4xJMPe7RWeLauvfOga8hJ2Cw00 /es/languages/lisp.js
sha384-kB1QfFMBwbQxnyNzZiWt6/rlLEODkTklgd4NfbEHc/8TYL6oV83o+Yydz8ZIx3Ie /es/languages/lisp.min.js
sha384-5TnIBSbRIGDilxscXgaTNLZ8PZ9u7TEBPzF8b9z+wrbTN3e89MbD9zSSuDVdbDFj /es/languages/lua.js
sha384-HCBq0pjgKyOc3FNX31to33MxfNYza3HCbHLfWwdsnkH5r/VmmXTlRrvWSHTJyYvA /es/languages/lua.min.js
sha384-gXOyhc1mLm8alPswShRUsxnBadQf2AOcdpmFVqkKSZBNS07kTOHb3DDepD3Rf9eH /es/languages/makefile.js
sha384-iagI2W32nmVJq2EVd59zlgz2bFjR/MC0JRsbcFaeZL2gmvHzzOeyRTpTKGBSKd7q /es/languages/makefile.min.js
sha384-+KkqXkoHKtuOmUzhZ0BjyV0qjljnS+z6i4fELMEg5brFPtmDIog4zZMhylaBTsVi /es/languages/markdown.js
sha384-E7UvgBH6skA1FIOcn3B2c68GtJzrmZlOOC5p/fsxwihTZG/bBedJZu5PC1+kGX7q /es/languages/markdown.min.js
sha384-V1naTapX08eXbOlk/ff334/j1cqIcSKIL8iFF7fabEzwo0662EJWXaMPDMMdyXZ/ /es/languages/nginx.js
sha384-7QaPTK4CkHm5HP+HbJ7BwALXSAvCln1ofcgr0Myla2I3O6cU/pupqPnajKmyy03P /es/languages/nginx.min.js
sha384-4OPZSHQbxzPqFMOXnndxQ6TZTI/B+J4W9aqTCHxAx/dsPS6GG25kT7wdsf66jJ1M /es/languages/php.js
sha384-VxmvZ2mUpp1EzFijS40RFvIc7vbv/d5PhMxVFG/3HMpVKD4sVvhdV9LThrJDiw9e /es/languages/php.min.js
sha384-i6sPjmXfHWLljAXTYYk0vBOwgsUnUKnKXKH41qzc9OMhaf5AFZqXH7azX4SYdUiR /es/languages/plaintext.js
sha384-OOrQLW97d+/1orj9gjftwbbQyV8LNAcgagqVKBhUYA08Hdi5w0p6VoB3yt2k7gnG /es/languages/plaintext.min.js
sha384-R7N9ng1N/Cb7RLskF1tB8AWD6kKnUs3LXqrJTj0aTGGXswS2sWq/XFUWPpEKSxqu /es/languages/powershell.js
sha384-GZl3J+HUi40wO5QngTvTpHXB0M2gGDnn9E/MyHRRS4VEWDNCS96bODclYTX3/JId /es/languages/powershell.min.js
sha384-6ziOLhWWyCEJ+Ho7frmiIJ+W0ZbVi6s9RxHsd1eF5DuGk117NZLm1mrWubXPjwhn /es/languages/properties.js
sha384-/jY3EnpQIhHPBJqje2gBbmlolzDCUfluYNls4EgMz6K8V1eGkYfd1EJBM0tepwl0 /es/languages/properties.min.js
sha384-Cmq5lORXzyHraasLNqmfchH07JRXyEmjDF+j6tSggoXjYHwtgX/ySW6kkRytM5uu /es/languages/python.js
sha384-ZV5sgX70bBgLkDR5Mtox5UsbJedBc39hRKPdvTw6miK4lSkE/wv94cLY2iyZb/sB /es/languages/python.min.js
sha384-vAVurAb8AMWBKPHNWPze2lJa7m/as9wrF1wzH1FQKrJNNqiemBLJi3y6aGdyu5Zt /es/languages/r.js
sha384-WkipJgUBRzr12T7CtL8kF6QTuPHAl8f7Sx1YnmOm3KiVA/k3eDXfifuSvUW9M5nu /es/languages/r.min.js
sha384-JOe8PF7ynaYxu7HI5O0NuVfXMMXYSJlCJqP4TYVNNq0eDKgm/N2dqcmqvp9QfIDu /es/languages/ruby.js
sha384-DpXpbYSP6sX4tcP61ZRjSMsnmF8V3c/hQILWjrGWI2g3lresYaqbxVxs+tioFMJn /es/languages/ruby.min.js
sha384-JFRCn12yvr0NDhxPY8oZDk/G2Tjm7bGmqXy28Y0bq4J7D8mKha6jQJOXMB5wtTVr /es/languages/rust.js
sha384-JbkB8w/DGGyx29PIwSq8c/ZeiJB9T/X4mVAZFEyBiNlEAas98Q2NxpBPUlNIlE71 /es/languages/rust.min.js
sha384-1mmBZmAs44b6FtD9wpMiLJa8bLZgZv9xoAhngN6B5Q22y9CtcsU2lat0zlRtyVgy /es/languages/shell.js
sha384-u9PV7oWG/lZlm+GnftX7kn0w4b8rRfFxSv5SmJJPHWKGI03rz6VLqgZdQ1B5ez6b /es/languages/shell.min.js
sha384-s1ZfN6xtlNKAZux8QYAG7upUsit3RwK5XDoCAN3g6Kj33RrIqbmkuGjdNF9RvzPM /es/languages/sql.js
sha384-y25cn06synxhYnlKVprZdpakuFWVrm2jvn8pqiF4L85a05CI/6bNeT2+qXbUYIyW /es/languages/sql.min.js
sha384-sfRYvVvcwsysqkDUscQ/SqsFOSvNGkGX5vm/yKMHdTwTd7A++Pqx1QpJK0bGebPD /es/languages/swift.js
sha384-9NAaCxdhTO7TX6fYeUHyt+NC3ledirZOADyWdinDCTN1taeqj8sLLYqjE8YMf4Na /es/languages/swift.min.js
sha384-Z61gsCS2W7Q+3fT1fdya/Sz4wlmsotT9iEGzgIlNqP0soaKH1NzysutxWp08Hh3E /es/languages/typescript.js
sha384-Tv4mr9B7b+x2IynRXW/xcAxUj1+AoN9zyp0n9BWE1Nle3Zfm/zUeEztNLhIRjgE7 /es/languages/typescript.min.js
sha384-82eHXc3kQTsEJ65AcO2c8eVqB9ynJzosSiMwdPYwt5oNRVsMKuxWoWkO5KFekVYB /es/languages/wasm.js
sha384-YBbT3eXpwj5Ddx0MS774iycYICw4gZ1Rs1ExYGIdcYC4EJhaWsfd9uNlaJZBuDaa /es/languages/wasm.min.js
sha384-9ECFzM+oWDye4s/MFx3QUXGo4mW43+SyLpWUDeQtWup6GZJ+KHFxVS89PmZt/fzl /es/languages/xml.js
sha384-PQrsaWeWrBiE1CFRw8K335CaJuQRTjDGm73vn8bXvlwaw6RyqWObdvMTBS8B75NN /es/languages/xml.min.js
sha384-7HTgKp/l2rzlyrh5vUfbfZVy+Wx1lKO4iGmfqvakienApv21u55lo+Vi+iVg4jY0 /es/languages/yaml.js
sha384-4smueUtgWTorlNLbaQIawnVCcIAuw82NetPOGWN5PbZT/pMr0rjvZXj0EUzJV1nr /es/languages/yaml.min.js
sha384-clX8n3JXaeM32WCfxwSNtf4Gh5OBuZEuA+VyvJEtUxXqpi5ZAWjv3uEITAEtCIVC /languages/accesslog.js
sha384-NAVE+aGPjSXIrt5LxakpP2qnE9khMpJfJFR7b9TswZOT6fH+aWUuvau1dvad0eF/ /languages/accesslog.min.js
sha384-DAVULDCw5LIrVSnI+OuRkZNCyIr7N0iG7trKt1zmxg7jjJCdIusFEacquZs1aDg3 /languages/apache.js
sha384-ioKFBz7IK1srBqD2/ZtEKYTUj0yv0rnUVBdJ8CdlCnwzifYahEJCYGz5572vamDd /languages/apache.min.js
sha384-suZoQknnQ0DBASFb5XFnOEH5yo/3puJ8QB7Si5imwbDpwqTHUE97sax+2gSz1y5Y /languages/arduino.js
sha384-Fh/jSSfDM8TBxrEe/yPhSI9FpoMT/3TL5ib1pmehS1cHspQ9SWRYbUSW5QCCbI56 /languages/arduino.min.js
sha384-lctfFl4oyA21jVOo6OW6n3ng/Yk/tPuM5/h7bMk1gv2nC5tKL4AdpRBugFnTU3j5 /languages/asciidoc.js
sha384-CMXVrh9g9wY0bYvbr18r26rwp495RtmyLa4uqYrnVBmJGG4IlJcfAzmVQunjabDM /languages/asciidoc.min.js
sha384-Jrkpn2hK0TY04skYBXB9fj7mMpKYy7g726cPwXGXf6mdBXnFlTDXFduxikMCRXT7 /languages/bash.js
sha384-BbT8tZtvkh8HPXIvL5RtzuljBwI3gR5KIdYxZyYSyI5C/+KNAGdzAiexvmxuroag /languages/bash.min.js
sha384-ZSgjvAZIrOodLXWvfWqMWlXYozMabtqq7RU+EYxkC6dY88UIL57M238H6/iSMQ3l /languages/brainfuck.js
sha384-94UkgHDSwJ0buTSCitB5A+1J78lWjZ8m21kNLahv+OtoGcRXzq3elTs7Jj3vybNt /languages/brainfuck.min.js
sha384-lAz0Eyld5DmFJB7cxaZonrkUJzGefh+K3niV5d7+vzzS7/P7FEeCJeLNXzMjeo+N /languages/c.js
sha384-tMmX0hBMZeMrZhX6dUNxA94/DNJLl70ao6qu2N9+b/6Ep9Y2e1pBzVjxtLygIB+d /languages/c.min.js
sha384-Z5Ja/rxBluJ4iPYwJYn2numfw2XFmlp3qLL1aJ1SZqyTjKWwMh9yWfpNCOqf3vAm /languages/cpp.js
sha384-B711MHXDqRvH/pKkxJk84RyRt9g0qyAJFsu2XukZKoCdnEiBmA6Aq9fO23ZCS7qk /languages/cpp.min.js
sha384-NTF0oluJbKDCxwGTujk+IsRQRbf+waUyDilA5GhOA+VSoxhyApQpmDWMjxfFO3dt /languages/csharp.js
sha384-Z+o7SU/ldIEIdOIqpMV+9s2n8EE1rZTFSRv5Sd7rlaSoPTpyflmmZ/oRb6ycw/2s /languages/csharp.min.js
sha384-bsb3QmLtUiyaiHwtrL4YoAVI9yLsjyqxgoAsk4Zd+ass9rSK1WWRiCDSu/hm8QRp /languages/css.js
sha384-0XGvxIU7Oq1DQMMBr1ORiozzBq3KpZPE/74mJysWRBAop1dZ9Ioq/qRWe8u30Ded /languages/css.min.js
sha384-j21u9doXcdcPgoSNMm6NCFA9AA7aGXmG5x2IPVDxNaiYaMUQeTHgNmloGqSx6hET /languages/dns.js
sha384-RI0iO3hAdUA6nZqyVrS82GoMXR0HcbzOTDO+9FNwVZz3NLJOFcbW3bPnRhrbNgGI /languages/dns.min.js
sha384-PF6NlDjoIfHgP6/hbKDRAswvI+dXitquVNX3GAJapyiu+AcQcdicRXJjIp8bj6pM /languages/dockerfile.js
sha384-hly+Rz036+A3/domxShxHoja13X3lfx8nyG3V8aMeOe7Efwu6gUaSrDxq9BKwYk4 /languages/dockerfile.min.js
sha384-baqD9xmGvRQ8Bu+0zTlV7q4o6lTNl90J1YiOh8vcbTQ23ipY0J3TNGVS4zb09cNc /languages/dsconfig.js
sha384-dxkj2dPKN260opX1T033+gUCKz2AsHi07XvsW9Uzf1i8PU5SoivwJ5N4HKcZNZSe /languages/dsconfig.min.js
sha384-XzoXXeE/xJGHQGNx9oAzQHp5qPfjhnwC0vnZ2PGII+K+DJK5vxXecoWgPABeLZNJ /languages/erlang.js
sha384-/RiBzQ7U6WaPqVGsPRMOZJJtA+uYrw8sV1x8BC9o6SzEXaq10F8ktmo/2RO3j87M /languages/erlang.min.js
sha384-Iz3ynEVDCIben5FVjY3qwTWdjyNW/i8DRjCc2KfuaoA9PN9+6bly+Ipu/zYbPruL /languages/excel.js
sha384-IiEC8fiTaLaSXXaeFq/XxoUse88fj4V+FmikhgzuXbiTLzfrfrWym3Pde4s2tv/P /languages/excel.min.js
sha384-SOuDxJBMFmbQBxU18ksxNru61DqhZzqKhFe262U4+vnCSGdXGrEZw7miT+/DqeTo /languages/fortran.js
sha384-js87axhH2Q+jkxUjpaX7DgtCMTO45eaDvzB5d4JvbuVwLp0w3b9We/TfVy2qJaK4 /languages/fortran.min.js
sha384-uh0SMHiaDpf+y9t0NE6+t9c3aMlzs8mHPxmkEU3fY12P481V2wNrKoxPMlKVG61k /languages/go.js
sha384-HdearVH8cyfzwBIQOjL/6dSEmZxQ5rJRezN7spps8E7iu+R6utS8c2ab0AgBNFfH /languages/go.min.js
sha384-hV7ok3wrc7DrjvcAtn3jI6KlZtpbm+hC4HXrOyRjrl65HjGtTJ5ixGiMSpJRDiDq /languages/http.js
sha384-X50fiL5mByDvJRwn0hkUXIEttF5t8hlEFSPUMq42KoryxgI4niflBsviuhahhWJf /languages/http.min.js
sha384-izwcylRNWmKKRcyCyrYZyNQekUCyR7Fh1x8nYWNCRJoRDU5JXv6TcqlP4C+4MfIf /languages/ini.js
sha384-NrmnsdarwteQHPGjt70kaQTi1KE0XfOJNX9/VJSg6wWwU6U2nPzjl3iWkgU1cvyx /languages/ini.min.js
sha384-Dprg6CdFFkimxaHg7qM7njVaWLMlOLqughixPERBDbm0cHdX6rKujTnJReof8O6m /languages/java.js
sha384-e+59xEZvRMXSRGD31B3HOBGAGqhhs+bbkxCqPuJDkSX5QGneIGTIfwdYJckTN3AO /languages/java.min.js
sha384-yxv7Fv9ToggiLsR67t98hV5ZRup6XX6xL1Rkbi/cGV5J8y7fosCi9POqlBkiBWFg /languages/javascript.js
sha384-tPOrIubtDHoQU7Rqw0o88ilthGO0/4xEZGB47XrQKWhrc1/SchwsDx+AP74u4nk0 /languages/javascript.min.js
sha384-pUlqdjoNePvHvdi7GVKJJnh/P2T3EvXXodl5j0JtTkbNC4DRH7gwGbcHFa84bFOP /languages/json.js
sha384-3C+cPClJZgjKFYAb0bh35D7im2jasLzgk9eRix3t1c5pk1+x6b+bHghWcdrKwIo3 /languages/json.min.js
sha384-vIyPs+G4S+ut5NV5tBIN5/E17wBiWbTTkFPPFbBC+r/FZOD95/fbcSzzeo00bE3x /languages/kotlin.js
sha384-7abn027YsNDPFilpW9aLlNUanPrq7Ht81zKQL9MKQq6/nkKrLczChRK5OA8GSKep /languages/kotlin.min.js
sha384-gC1LLqQxzTtslF1/nhSmFhIyScy7u0VnfVPDE45XlK+Ed/wgeOK0zae/DRDGNTDs /languages/latex.js
sha384-A8E38+eenPg19mMk5Ikv1fetaPL/yA2OsGR3hFs9TeeBX+zQ8u5bZNsPKmlFHwN4 /languages/latex.min.js
sha384-HZV/dhDa0Ue0fPBAGMmwuiv9vQZaT2jcez0/IXCbLe1MCSp9TwA6tvoaUhlw+kuW /languages/lisp.js
sha384-XHf/F3AFtpwh/qvji8cbUFV7wLfrPKcyItaFlzg2/tS8EEBRgjCzWagzMOF4A6TP /languages/lisp.min.js
sha384-IQZHDTDQQ0zpXf1FfEYOFIfjZrBbLbNXYCn4zukU6u9mLf6JI36vvIRaV6/d175T /languages/lua.js
sha384-dbTI+BVfiAlIfjWMYrH83f/x/GYSKbujaX4g4F7q5YxbGtlS7qTLcwBQQvDdsGf6 /languages/lua.min.js
sha384-NpIMNHXY0x67yhJSnXiHh9V28uT0Bfz2cKxc30p9vURMu5IAcDhJT1TpaqUE1x0B /languages/makefile.js
sha384-DjL90zP08vzabGXs0CglFocqoxPXnzAcKhobGV+CQDA5FHGW7xCnxjylOhna+HB+ /languages/makefile.min.js
sha384-Sk9XW/OOutdl6KS1M9Wson0imuqr0LkpoTRDHi5QFH4MWe0aViI5d86BOVkh8Ds0 /languages/markdown.js
sha384-Rv26WbhHH4MDPzeExq4ECmZUYF942tlfVhqA91Drw1P+Ey55KjihLF9RJENxjWr1 /languages/markdown.min.js
sha384-6yimxEGm9AwY562ggpE8Y+JOP2k/CzmRiB1LCQYpXYotigZw0zrOZy16v63xHMv6 /languages/nginx.js
sha384-CppArOy5YFkx1rJ0ZUWNnkF+CAV5OO9pHj3Fk7Kox4p/9H581UDmEck1buzehnjF /languages/nginx.min.js
sha384-0XBmTxpMLuDjB2zdfbi3Lv4Yokm2e1YFGZ9mCmI5887Kpi23jMF5N7rPrf0GdoU/ /languages/php.js
sha384-Bv/Sxv6HlOzYOdV1iQpJTG3xiqGWIIMq9xsFfEX8ss7oNWMgKqOa/J2WSFG2m7Jd /languages/php.min.js
sha384-MZKv9uidO1+VnHz8xWxPv6ACuLO5t823eanvTcKYnmi/ocdVYD8zKZNTxmF0nKEM /languages/plaintext.js
sha384-Z9EdtPaC8UiXHEq1WuQTdvqT+FwjLwaVTIwTCZW/dGfiU9nbF8Shvltrhqtw83Qb /languages/plaintext.min.js
sha384-IovgHYXogGBldWibmA9aDifITNGdjEeaRUjvsJ3l4Rf4LVusXXcOZUCSxBEhXWqY /languages/powershell.js
sha384-q/8iVbv95DiFN+l7qeoBwJ0Wju7gozJemMfG3DdxiOR8CfA/2dKvKA3W5t4l/n9t /languages/powershell.min.js
sha384-IBSZGeRgNEOG3+t3RE0uLeiV5QFOYfL/ONCRpBLMGvnBClAUhNUUmYdY8bLXnFUw /languages/properties.js
sha384-Hw+JDJl3BaJE0DQ2qZUhbHrTi4UQ/je7PqMHPNfThOlI71MLMj8jRMr+wB0Fa9LS /languages/properties.min.js
sha384-ueSSFZFqg7cVD0dpEqIk9EefJiJUYan0PH6I8u/p+bNLLx7dMs4J2keMaFXqCN8P /languages/python.js
sha384-eXRt+aAa2ig1yFVDQCLis8k9s/1dikTcigj+/R07yNdIxc8BAG/b1uHDyEW3of17 /languages/python.min.js
sha384-Wnn+wk2C8+hIgCNyvLC1dFTsN01c/yrpVqpKDNYF1M0Rg5kYCCmO8o8lS/yY3w2D /languages/r.js
sha384-poz1JEq/ihCmK+1p8IXPoluMlou+rnb+4Q3DenGB+mkNBB/JZkT0c/TERX8D+RUX /languages/r.min.js
sha384-6rhZe8x0LGCtYYrvHFTyO9QfZq2jHdoFsruI9B+lvUD0+Gc2Bn4JW0+cEC94ly3c /languages/ruby.js
sha384-Rlnlnjp0sedK9HVa29DtCyVFVEDRZyeTMQ6+aOKUaXptJmpVGTEmCk6ziXfmku6l /languages/ruby.min.js
sha384-4hMItQrXDnquJWRbDiZ+cP4udu1pcJlCVFg3Ytv9OgWNbpIwzizsWbIwzA1BAJrI /languages/rust.js
sha384-kENps59cKQW5DV3vOEzpSp6tfGzWGpPYKz748i4gGziVSjieRtupNNu/WEwG3s8n /languages/rust.min.js
sha384-BanM6jNzM3hgNw0Vu3gSe58a3MK3PSlMUzh5s8QaaDzIvTWgB0jNetV3rNxteKHy /languages/shell.js
sha384-mSZF08WaP0Llc4GMwE0KA2V9yfZQimO5PvfcXf2AATDdqri3Q7IdV7pfbhVPJCHV /languages/shell.min.js
sha384-2sXmcW3eKeNDWiLtuq9NgFJC4NsLBN/fDTzZevmcgBrSERv6iO/k+c7r9T09Fb8J /languages/sql.js
sha384-jrnLoVn13sB+/dTfoAYVPhg0tYGQzzuzSGP3WTk8OvKAY0hDejpUXFYYI3bohAyW /languages/sql.min.js
sha384-+juhAXbxlgltos7eNuzta0Y7hfKqGQftMcEEStYqBJftSEdIiLd/FaviI8hs4d86 /languages/swift.js
sha384-CCauhmYx0fwWViYO6uiTII5shLTfiY/OzxKmLRTeCp8Ok81I2nXZS2Gb9lJVOSPC /languages/swift.min.js
sha384-8v3YMaXFO9cmTNxsHWqwn9wJsV1jVO7rwx4huxqlEQpT/P2tuDbtm+Hs0EdYqu0a /languages/typescript.js
sha384-df1w1nJ43GNwmgbSCrT8YFIYyqFAm+lzj+b6ofuziX8Cfdg9QHFwbORDgAaj//wi /languages/typescript.min.js
sha384-TCN/hvup/XKpDtGmR/RyK6NSG247wkNROUpO2sAoJuwpMvcr4KP9HA+K5L2rvOKg /languages/wasm.js
sha384-J3pUKFGnHJH0czAle+lKF96F/08caYKJfTEzlt5dGbGTR9M4BwOeOqAgvSzsjOsP /languages/wasm.min.js
sha384-Pgzg6a405W6U1xFjjSs5i8d7V81Tmt/TYn8HFOa+u1psDc8cbs8nC7BuyNXbWWRK /languages/xml.js
sha384-FQjSArDMJE4WMAJGcCNAV+IXIOljcIxM3UFAD2vxjedWmBnnDaAyqRG7AQHf/uM/ /languages/xml.min.js
sha384-6GXi9L5BnOWPU6bzwYL78Zscp23qyDdMLZpZvp4mLzvF2qt0eY/DfsPHiFVXq4hv /languages/yaml.js
sha384-A/iMReLA0Bo3tLydBIoOQXQzYnrwL90jkHYUubrtERUGCbIuU7U0EHge0Xd2s5sr /languages/yaml.min.js
sha384-BpkapVvkmXdmFv40ZAf6RfJ0tm6891cI6pQJW/Hdr656VlL5dK7UkFPa2RppxkVC /highlight.js
sha384-ZZHgCfEfI6ziuW55qlK/RsSJ9HXn+STUY8Vrvtm2WHRWLYRiEok/rVV53SLVdTqc /highlight.min.js
```

