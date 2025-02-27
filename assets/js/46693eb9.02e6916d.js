"use strict";(self.webpackChunksdk_mobile_doc=self.webpackChunksdk_mobile_doc||[]).push([[1733],{3891:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"Customization","title":"SDK customization","description":"This version of the SDK allows some visual characteristics of the","source":"@site/docs/android/Customization.md","sourceDirName":".","slug":"/Customization","permalink":"/sdk-mobile-documentation/docs/android/next/Customization","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Sample Applications","permalink":"/sdk-mobile-documentation/docs/android/next/Sample_applications_use"}}');var s=t(4848),i=t(8453);const r={},a="SDK customization",l={},c=[{value:"1. Colors, logo and animations",id:"1-colors-logo-and-animations",level:2},{value:"1.1. Animations",id:"11-animations",level:3},{value:"2. Texts",id:"2-texts",level:2},{value:"3. Font",id:"3-font",level:2},{value:"4. Buttons",id:"4-buttons",level:2}];function d(n){const e={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"sdk-customization",children:"SDK customization"})}),"\n",(0,s.jsx)(e.p,{children:"This version of the SDK allows some visual characteristics of the\ncomponents to be modified. The possible changes that can be made are\nlisted below."}),"\n",(0,s.jsxs)(e.p,{children:["It is recommended to add the modifications to both the ",(0,s.jsx)(e.strong,{children:"light"})," and\n",(0,s.jsx)(e.strong,{children:"dark"})," (",(0,s.jsx)(e.em,{children:"night"}),") themes."]}),"\n",(0,s.jsx)(e.h2,{id:"1-colors-logo-and-animations",children:"1. Colors, logo and animations"}),"\n",(0,s.jsxs)(e.p,{children:["To change the SDK colours and logo, you would have to include an XML\nfile in the client application (e.g. ",(0,s.jsx)(e.strong,{children:(0,s.jsx)(e.em,{children:"sdk_styles.xml"})}),") changing the\nhex (RGB) value of each primary colour:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    \x3c!-- SdkTheme --\x3e\n    <color name="sdkPrimaryColor">#7636FC</color>\n    <color name="sdkSecondaryColor">#03DAC5</color>\n    <color name="sdkBackgroundColor">#FFFFFF</color>\n    <color name="sdkErrorColor">#DD3631</color>\n    \x3c!-- SdkColorsPalette --\x3e\n    <color name="sdkTitleTextColor">#1D2C4D</color>\n    <color name="sdkBodyTextColor">#526080</color>\n    <color name="sdkSuccessColor">#07A13A</color>\n    <color name="sdkNeutralColor">#202C4B</color>\n    <color name="sdkAccentColor">#EA7547</color>\n    <color name="sdkTopIconsColor">#243760</color>\n    <color name="sdkButtonTextColor">#FFFFFF</color>\n    \x3c!-- SDK BUTTONS --\x3e\n    <dimen name="sdk_buttons_corner_dimen">32dp</dimen>\n    \x3c!-- SDK LOGO --\x3e\n    <drawable name="sdk_logo">@drawable/ic_demo_logo</drawable>\n\n  \x3c!-- ..Add particulars of each component... --\x3e\n\n</resources>\n'})}),"\n",(0,s.jsx)(e.p,{children:"To modify the logo visible in the different components of the SDK, it is\nsufficient to include in the file the following line, including the name\nof the logo of the client application:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'\x3c!-- SDK LOGO --\x3e\n<drawable name="sdk_logo">@drawable/logo_name</drawable>\n'})}),"\n",(0,s.jsx)(e.p,{children:"The animations apply styles (mentioned above) according to the five\nfundamental colours:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-java",children:"sdkPrimaryColor\nsdkErrorColor\nsdkSuccessColor\nsdkNeutralColor\nsdkAccentColor\n"})}),"\n",(0,s.jsx)(e.p,{children:"Changing any of them will affect the animations of the components."}),"\n",(0,s.jsx)(e.p,{children:"The Selphi and SelphID components carry their associated resource zip,\nwhich is kept outside this feature of the SDK."}),"\n",(0,s.jsx)(e.h3,{id:"11-animations",children:"1.1. Animations"}),"\n",(0,s.jsx)(e.p,{children:"If you want to modify the animations (lottie) of the SDK you would have to include the animations with the same name in the res/raw/ folder of the application."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-text",children:"anim_cancelled.json\nanim_success.json\n"})}),"\n",(0,s.jsx)(e.h2,{id:"2-texts",children:"2. Texts"}),"\n",(0,s.jsxs)(e.p,{children:["If you want to modify the SDK texts, you would have to include the\nfollowing XML file in the client application and modify the value of\neach ",(0,s.jsx)(e.em,{children:"String"})," to the desired one."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'    <string name="sdk_permissions_exit_alert_title">Permission denied</string>\n    <string name="sdk_permissions_exit_alert_question">In order to continue, you need to </string>\n    <string name="sdk_permissions_exit_alert_question_other">allow access to the permission needed.</string>\n    <string name="sdk_permissions_exit_alert_question_camera">allow access to the camera.</string>\n    <string name="sdk_permissions_exit_alert_question_microphone">allow access to the microphone.</string>\n    <string name="sdk_permissions_exit_alert_confirm">Retry</string>\n    <string name="sdk_permissions_exit_alert_confirm_settings">Go to settings</string>\n    <string name="sdk_exit_alert_title">Finish the process</string>\n    <string name="sdk_exit_alert_question">Do you want to finish the process?</string>\n    <string name="sdk_exit_alert_finish">Finish</string>\n    <string name="sdk_exit_alert_cancel">Cancel</string>\n    <string name="sdk_exit_finish_exit">Finish</string>\n    <string name="sdk_text_video_error">An error has occurred with the connection to the video. Please try again.</string>\n    <string name="sdk_text_socket_error">An error has occurred with the connection to the server. Please try again.</string>\n    <string name="sdk_text_data_error">An error has occurred with the system configuration. Please try again.</string>\n    <string name="sdk_text_timeout_error">Sorry, the operation has timed out. Please try again later.</string>\n    <string name="sdk_network_connection_error_title">Check your internet connection</string>\n    <string name="sdk_network_connection_error_desc">Check that your connection is stable and try again.</string>\n    <string name="sdk_network_connection_error_button">Exit</string>\n    <string name="sdk_close">Close process</string>\n    <string name="sdk_info">Show tutorial</string>\n    <string name="sdk_previous_page">Previous page</string>\n    <string name="sdk_next_page">Next page</string>\n    <string name="sdk_image_captured">Image captured</string>\n    <string name="sdk_confirmation_retry">Retry</string>\n    <string name="sdk_confirmation_continue">Continue</string>\n    <string name="sdk_skip">SKIP</string>\n\n'})}),"\n",(0,s.jsx)(e.h2,{id:"3-font",children:"3. Font"}),"\n",(0,s.jsx)(e.p,{children:"To modify the font, add the .ttf files to the font folder of the\napplication and rename them as shown in the image:"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Image",src:t(4021).A+"",width:"387",height:"111"})}),"\n",(0,s.jsx)(e.h2,{id:"4-buttons",children:"4. Buttons"}),"\n",(0,s.jsxs)(e.p,{children:["In case you want to change the shape of the SDK buttons, you would have\nto include this line in the SDK style XML file by changing the ",(0,s.jsx)(e.em,{children:"dp"}),"\nvalue of the ",(0,s.jsx)(e.em,{children:"dimen"})," variable:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <dimen name="sdk_buttons_corner_dimen">5dp</dimen>\n</resources>\n'})}),"\n",(0,s.jsx)(e.hr,{})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},4021:(n,e,t)=>{t.d(e,{A:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAABvCAYAAAAOlaxfAAAZmElEQVR4nO3d+XNTZ57v8bdkWV7kRd5tbMDgjbDb7CQQsAGbNZDEdEISwppMz/R0ZXL7Vt1/YlIz91bdqltzb/V0Z3p6CprEYJuwE3bCFmIbb4DxCl7xLm+ydH8QEpZ0jC3bxEb6vn5COkfnPOcAevScZ/mo1qxZY66trQXAbDZjNpupqalh/8HDlJWXM1EMne34BwZP2PGEEEJMHI1KpbJ7w/Za5bzzf/v6a6f3/vmbbwgODiYzcxPTYqZRW1fLqVNn6OrqfB3lFUII8RqozWaz05tK773K5qwspsdNx8vLi5kzZpKZuXGiyieEEOJXoDabzTi2DlwVHR1j9zrG4bUQQoipTa1Wq51aAiqVyqXWQX39M7vXzxxeCyGEmNrUYP/lb+1EVil1Ggzjh1OnqKmtYXBwkKrqKk6fPvt6SiuEEOK10IClArBWCK/qQP7nb75RPEh7eztHjhx9bYV8k2398GO7172Gbh6WPKD6yeNJKpEQQjjTOL7hauexcI2vv44FS5aj9fXlUckDlz6r0+nYnLmJ8PAwLl+5SnFJ6WsqpRDC0zhVBuPtTHYXQUFBGI0DGAw9Ttv8/f3QaLzp6OgY8/FT5i0kZd7CYbfn/+2vTu+9vWolyUmJ3PzpFs3NLWM+N8CWrEy0Wi05J3LHdRwhhHtwGk0kLQOLjIwMsrN34+/vZ/e+v78f2dm7ycjI+NXLpNfraWhs5MKPl2hsahr3sUL0+okpmBDijec06QxetA48vE44ffoU2dm7yc7ezdGjRzAYemwVgXW7q0yDJuqqngAQO3MWai/1qD/72Z6PmTFjOiqVij98/RV5+Sfp6Ogkc9MGoqOi6Ovrp7KqihN5+RiNRrZuySIsNBSAuLg4nre0cOfez9y5e4+Pf7ObWfEzbcf67vscKp5Uunw9Qgj3obaOHrJydVipuzIYejh69AgA2dm7CQ8Pt1UE1srBVT/fvk7BvVsU3LvF/VvXXfrsxUuXqa2ro6GxkZzjJ2hobCL7w/fRarXknfyB6zdvkpKcxPatWwDw9fFlVnw8LS3POX4il57ePtaueQeAy1eu8vTZMxqbmsg5foJn9Q0uX4sQwr3YhpYOJf0GFkMrhL2ffQaMvSIAaG54Of+iqdG1uRi1dXX09fXR3z/Ao8cVREZEoA8OJjfvJIVFD7j50y3u3vuZ2bNm2T7T2tZG/g+neFBcwvUbNwkMCGD2rHjqnj6lr6+fgRfH6ukZ2/UIIdyHWqklIC2Dl6wVwsOHD8dVEQBERMYo/nksIiPCGTAaefrsZaXS3NJCQICOgAAdAIZuw5BtzQBotT7jOq8Qwj1ppCIYmcHQQ25e3riPs3jFaiKG9BmMR8vz53hrNEREhNPUZPmi1wcHY+jpoaure3QHkQagEOIFux5Mu8dD8kUx4dRqNdNnJTB9VgJq9eg7j5VUVlVjMBjYujmL6XFxzH1rDkvSUqmpqRnV5w0GA2GhocyKj0ejcRphLITwMGqVSmXrNLa2CmQ00dRk+eux/MUYDAa+yzlBQEAAB/btZdd7O6hvaORE3knr3piH/CW+bPBZ/lBY9ACzGfZ+uodZ8fG/0hUIIaYqlWO4DUBVVRUHDn9BWZmE27wJ9MHB9PT20NfX79LnvNRqfP386O4e5WMlIYTbsns+oFKpMJlM0jJ4w7S1t4/pc4Mmk1QEQgjgxWMiq6EL1gkhhPAcTr2YExF2I4QQ4s2iOKRFWgZCCOFZJiT2UgghxJtNcQaySqWSeQZCCOFBhn9MJE+KhBDCYyhWBvLYSAghPIvGcTiptSIwS9NgynHMUx6JUlqaEEIoUYP96CHrshTSOhAA69au4b3t2wBImD2bQ/v3ofX2HtOxNmak88WhA6Sve3ciizhmaamLObBvLx/t/nCyiyLEpHPKM7CuVSQNAwEQGhpKZEQEYIn8jI2dhtrLy+XjJCclsnrVShobm6iqHt1iesNZkpbKof37ht2+JSuTnTu22733+aefsGrlCrv3MjduwGw2U1JaNq7yCOEONOA8r0DmGUxNjo99kubOJ3nuAgDKiwt5WFw0GcUalfBwS/5Cbl4+gybTuI6l0+mIiAgfdrter8dHq3U4fxjP6uttryMiwtFqtdz86ZZUBkLgsDaRlQwtdW+rVq5gxbKlBAYG0t7ezpVr1/n5/i8ArFi+jGVLl6APDqa+vuGVKWhZmZtISUrkeG4+lVVVw+63ISOdpWlpeGs0/NNXv+f+/V8oLikdNr85dfEi1q1dQ/mjR8ybO5eB/n6KS0o5ffYc69e9y8rly9Bqtfzh66+4feculy5fsZ1LKd95+7at6HQ6lqSlMSclhTPnzrN9myUedPu2rSxJS+U//vO/JujuCvFmcnpMZFvKWhoHbiksNJQN6espLSvnT9/+hbqnz0hftw6NRkPC7NlszEinsbGJY98fp6GxkcTEBMXjbMnKZPHCBZw+e/6VFQHA/V9+4X5BAf39/eQcP0Fxackr85u9vb0JCgoiLDSUvPyTPHpcwcoVy4mLjaWwsIiCwiIGBgbIOX6CoqIHdudSynfOzcunp7eX0rJScvNPUlNby5mz5wC4dPkKFy9dnoA7K8SbTfExkXQeuy8fHx/UajU+Pj709vZy7Psc27akpEQMhh6Offc9gyYTJaWlxMREOx1jY0Y6C+bP48jfjvHoccWI52xubqGzsxOz2cyjxxWkJCejDw7m3/72nS22MygwkAXz59t97uQPp2luaaH84SPmzX2LlOQkzl/8kc6uLtuxHFnznTFj217xpBLT4CDd3QaeVFYCUN/QAEBLSwt1dU9Hde+EcGcaxy9+22upD9zS02fPuHz1GqmLF7F40UJaW1u5c+9nrt+4SYheT3t7u90z/ba2NoKD7HMo0lIXYzKZaG5uGVMZRpPfbBwcpLnFcnyj0YjBYMB7jKOYhBAjUyt1FksHsnu7+OMlvvmX/8m///lbGpua2ZiRTlRUJB0dHQQEBtjtGxgY6PT5o8e+w2Do4YNdO/EaQ3zn0PxmK5fzm0ciP2aEcIksVOdh5s+by9df/Z4laanUNzTQ2NiIyWRi0DhIxZMnBAcFsXVLFtFRUax/dy1xsbFOx6h4Uklufj7R0VFs37bV5TKMN7+5q6sLrVbL4kUL0eksLYkd27aSvn4doJzvbOjpIS42luioKJfLK4QnUKvVasU+A2kduKfSsnJqa2vZkpXJ//jvf2D5sqVcvnqN5pYWSkrLuHrtOvPmzuXLwwdZuGA+TyorFccSlD98xMVLl1m0cIHT+P3hWP9NjZjfbDYPDW22vMXLMQ0PiotpbGrive3beHvVSgDi42cyc/p0QDnfuaCwiOjoKPbt/ezlAXE6jRAeS7V27VpzbW0tphfPic1mM9XV1Rw49AVl5ZKBPJWNZ56B1tubYH0wTU3NTtu81GpCQkNG3SewfOkSpk2bNuz2azduKJ4Hxp7fDJb5Br09PQyaTGg0Gswmk62/QynfWevtjZdG88rhskJ4KttoImtrQDqQ3xwPi4vGPNGsf2Bg2C/oQRc7h/39/QkODhp2u/VRjZKx5jcDdl/0RqPRbptSvnP/wAAMDIz5fEK4M6f/pfJ4SLjqxyGTvoQQbyanoSDSmSyEEJ7HaTSRtAyEEMLzqJVaArJqqRBCeBa1bS2iF2RYqRBCeB6nheqUXgshhHBvaqWWgLQMhBDCs2ikInhzSAayEOJ1sRtaavd4SJ4UCdwjA/nt1av4YNd7Y/78wX2fk5KcrLjtrTkp7P9875iPDZLFLKYGtTXzeGhHsowmElZvYgayoxC9nqjIsS9QFxs7DZ3OX3GbTqcjLlZ5KQ6lcirlM0sWs5gKNNZKYOhyFGazWVoGU5BkIFuMlIE8VSiV0zGfWbKYxVRhtxyFSqXCZDJJy8DNuXMG8nBUKhW7P3yfxIQEevv6KC0t4+Sp0wD4+vqyY9tWZkyPQ6PR8OxZPfmnTimuzzR7VjwZ6euJjIyks6ODyqpqxfMplXNaTIxdPvPtO3dYvmwZIFnMYvKpHWcfyzwD9+buGcjDCQ8Pw8/Pj5wTeRQUFrF0SRpr33kbgF07thM/cwaXrlzlh9NnCAwM4DcffuB0DD8/P97bsR0vtZoTuXnc+/kXFsyfp3g+pXI65jMXPSiRLGYxZSguVCfzDNyXu2cgD2dgYICjx77HYDBQXFJCVGQkCQkJXLt+g/j4eK5dv87tO3cBMBh62PPRbuJiY6mtq7MdI37mDIICAzly9Bh1Ty25yfqQYFIXLXK+5pYWxXI65jNrNJb+F8liFpNNcW1haRm4L0/NQO7s6sJgMNhet7a2kpKcRGRUJFqtN41DlvOuqa0FIDo6yq4yCA8Px2g02ioCYMz3QIipRmIvPZBHZCA7CNDp7HIVgoKC6OjspKmpGaPRSEiI3rYtOtoy8sjxi761tRWNQ7lD9HpcJv/dxBSkOANZpVLJP1g35a4ZyCPRarW8v3MHMTHRrFi+jMSE2VTX1GI0Gqmtq2PliuUkJycxc8Z0Nmak097R4dQXUllVRU9PD1s3ZxEXG8vCBfNZtHCh3T5Ds5iVyqmUzyzEVKD4s85sNstoIjflrhnII2l5/hydTscXBw+wIX095Q8fceHCRQByjufS1tbO7g/e5/PPPsVb482x73KcjtHV1U3eyVPo9XoO7v+cLVmZPHr82O7H1NAsZqVyOuUzSxazmCJUa9euNVt/kVnnHNTU1LD/4GHJQJ7iJANZh0atZv36dcPu09TczLXrN16eT6+nr69Pccisn58f3hoNHZ2dI547PCyMtvZ2p7hNxyxmazmtWc2gnM8sxGTTOA4ntfYfmKVpMOVJBnI3wUFBrzy345d+W1vbK/cdflaFPWvntiPHygFw+tJXymcWYrJpwH700NAZyUKMxmRmILd3dPCnb/8yaecXwl045RlY1yqShoEQQngONTjPK5B5BkII4VkURxPJ0FIhhPAsTo+JbEtZS+NACCE8huJjIuk8FkIIz6J2/OK3vZb6QAghPIZTBjJIB/JUJRnIQojXRRaqE6/kbhnImRs38MnHH7n8uddpsu6LEEOp1Wq1Yp+BtA4EuF8GskqlQq0e3Y+fkbKTRyqHUt7x559+YreW00TeFyHGQwMv4y5hyAxk6TSYciQD2WI8Gcinzpwd17ldKYdj3jFYEtee1dcPeT1x90WI8bAtR2FtDUgHsvvzxAxkq82ZmwgPD+Pbv/zVdi+WpKXarre1rQ0/P19bFrFKrWLPR7uJnzmT3r4+7ty9x+UrV0csx8e/2W2Xd/zd9zls37YVnU7HkrQ05qSkUFxa6nRfzr1YSVWIX5vTpDN5POTePDUD2crHxwc/Pz8AUpKT2ZC+nvr6eo59n8Oz+nrmz5uLn6+fbf/wsDAMhh5yTuTR0NDIurVrCAnRj1gOx7zjZ/UN5Obl09PbS2lZKbn5J53uy/2CApeuRYiJ5LScpHQmuzdPzUBWkpSYQEdnJ397kV1QUlpGdFQU6iHpbd0GAzkncgFo72gnMWE20+PiKCgsemU56p4+dco7rnhSiWlwkO5uA08qKwHs7osQk8lpCWtpGbg3T81AVhIQEEC3Q8xmZ1en3fUaul/mJlsD673G0IEuxFTnNOkMkFVL3ZwnZiAraW5uJjw8jLDQUMCSyxATEzOxJ5GGtnhDqG1rEb0gw0rdm6dmICu5/4vlef1nn+4h+4NdHNi3F18fn1F/3rEcgYEBfLrnIxYusDzuUso7NvT0EBcbS3TU8ENWhZgMTgvVKb0W7sNTM5CVkvuaW1r465GjlJSWodF4U1BQyKPHFXZ7Kn3Oeh2O5QgKDGLmjBm2L3qnvGOgoLCI6Ogo9u39zOl4QkwmpwxkgKqqKg4c+kIykKc4yUB2PQN5qMSEBJYvW8KVa9epqaklIEDHl4cOUVVdZetUHm05rBnHWm9v+gcGbNuU8o613t54aTSvHLYrxK/NaW0i+ZXy5pAMZNczkIeqratj08YM9n6yh/aODlu/xe0791wuh9XQigCU8477BwbAYT8hJpvd/1K7/gJ5UiRG6U3NQO7t7eX//r8/8tZbc9C/GElVUfGEjs7OCS6lEFOfxpp5bBoynFBGEwlP0T8wwC8FhZNdDCEmnW00kbXT2NY6kJaBEEJ4DLtB4nbrE0nLQAghPIbaMf9Y5hkIIYTnUVyoTuYZCCGEZ1FcS0BaBkII4VmcFqoTU5dkIAshXhe1UkWgUqlkNJEA3CMD+dcwNFt5vPdp547tvLvmnWG3f/j+LlaPchkOJdOnx/HZJx/z2y8O27IdhBj+MZE0FATukYH8axiarTye+wQQGRlBSEjIsNujoiIJ0eudPxcRwW+/PMzMGdNt7yndqw3p6wkNCaGw6AEDMhNavKC4ToB0IE9NkoFsMZ4M5NdlIrOVx8pb601kRARa7cuVV5XuVVBQEGXlD7l6/fqvXUQxhTn1GVgrAqXVGoV78LQM5KTEBDakpxMWFkpPTy9FDx5w+uw5AGJiosnauJHo6GgMBgMPSko4d/4CAAf3f05raxvTpsWgDw6mpqaWe/fvs/7ddwkKCqSpuZmc47k0NDY6ZSsDvL1qJWlpqXipvaiprSHnRJ5tnaINGenMnZNCYKDlOFev3aC4pESx/Fu3ZDEnORkfHx8ePnqk+GMtMSGB93fuAGDXzh1UV1fT0NjkdK+WpKYSEKAjddFC5s5J4Zt//V+vvHfCc6jBfvSQ44xk4V48MQM5c9NGug3d/Onbv3D77l2WpKWSmDAbHx8t2e/vQuOtITc/n4LCQlatWM7KFcsB8PPzIyU5iZs/3eL02XPExsWydfNmbt2+zYm8fIKDgli9yrJ899BsZat58+Zy9tx5Lly8SGxsLO9tt2Q/vPP2alavXMGD4hK+yzlBd7eBHdu2Mk0hWGfd2jUsSU3lfkEhOSfy0Ol0tjCeoZ4+e8bZF5XY5StXuXL1uuK9ysnNpbvbQHFJKTm5eSPeO+E5NIBTy0BmILsvT8xA1npr0Wg0aDQaLl+5yuUrVwFITk4iJCSE/P/8L9o72qlvaGD2rFkkJyVy86dbAJSVP+TOXcsqposXLqTbYODmrdsAzJ83j+Dg4Zdlv3DxR4oeFAOWlV2tuQ/JiYk8evyY8xd/BKDiSQVf/ePvSEpMsIsCBUhImG3Z98JFAKqqq/nqH//B6VwGg4HGpiYAWlqeU/fUEtHpeK9anj/HZBqk22CgouLJqO6f8AwacJ5XIMNM3ZcnZiCfPX+eNe+8zd5P92AwGCgtK+eH02eIetEx/pvsD2z7ent709raZnvd0/vyMZnJZKK//2XuwuCgERi+TLW1dbY/NzY1o9VqiYqKRK8Pprjk5bX39fXT0dlJaJjzL/7goGBb9jJYlsvu6uoa3YUL4YLhO5DlKZHbuvjjJS7+eImZM6azauVKNmak87iigo6ODiIjI+z2HS4DeXNmJh/s2sm///lblzuEh2YgWzMVXmcGcmHRAwqLHhAeFsbixYtYvXIFLc+f87y1FYD//X/+jba2tgk/b1RUlC2vITQkBKPRSHNTMx0dnQQF2WcwBAQE0F7mHCbV2Wm/r9bbe8SoT3nCK8bCKfbSloksjQO35GkZyAEBOv7p979jc9Ymenp7qa6ufnG9Rp5UVmEwGNi+dQtxsbHMnhXP3x0+yK73drh8TUrS171LfPxMkpOTWL5sKXVPnzJoMlFZVUVyUiLLly0lOiqKXTt3oNVqeVzh/NiruqbGtm9MTDS7du6wayGtWrmC3R9aWjZdnV2YTCaSk5LQv3h8NVF50cL9KT4mks5j91VaVs7ct+awJSuTbVs209fXZ8tAbm5p4eq16yxduoSlaWm0tbXxpLLSbqiilTUDeWNGOg2Njdy4+dOI53bMQN6ctYkD+/ZiNBqprql1KQN5xfJlvLd9Gzdu/sSZc+eHPWdXVzf37v/C6pUrWL50KYODg5SVl3O/oIC+vn6+P55LVuZGDuzbi0qlorauztanYDux7Y+Oj1Nffb11T5+y95M9ANQ3NJD74vrOXbhIYGAA6evexcfHh46OTk6fOas4/+Lc+QuEhOjZmJGORqOhqrqa562ttnsZFzuN+Jkz8PPzo72jg+KSUtJSFxMRHs4f//yt4r0yj6bwwuMoZiBXV1ez/9BhyhSarWMlGcgTTzKQXctAjogIp7W1DaPRqFiOQdMgnZ0T+zxep9Oh8fKivaPDaZuXWk2wPpjnz1tHPI6/vz9ab2/FmFDH3GVfX1/MZpPdPR2a0yyEEqcMZJAO5DeFZCC7loE83PWOtxyv4ph/PNSgyTSqigAsrSnDMNscc5d7e3tdKocQIAvViQnwpmYgCyFeUqvVasU+A6kchBDCc9hGE1m//G0zkGVsqRBCeAzbchTWEUS2kURSFwghhMdQjL0UQgjhWZwqA5ljIIQQnkftuEKptAyEEMLzaJRaArJq6cRxzC3uNXTzsOQB1U8eT1KJhBDCmdq2FtELMqz0paCgIN7ftRN//4nLifX117FgyXIS35o3YccUQojxcsozsL4WYDQOEBgUTHb2bo4ePYLBMHzql6tS5i0kZd7CYbc7RlwKIcTrpFZqCUjLwMJg6OHo0SMAZGfvntAWghBCTCVOaxNJRWDPWiFkZ+8edwvBNGiirsqSLhU7cxZqL6fBXMMKDAzgy8OHePjwEUlJibS0tPDHP33L1s1ZvDUnBV9fX1pb2zh34SJl5eUc3P85VdU1nDt/AS+1mn/4+7+j/OEjTp0+A8Dvfvsld3++P6rVRoUQ7u//A2zgl+T8nRdyAAAAAElFTkSuQmCC"},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var o=t(6540);const s={},i=o.createContext(s);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);