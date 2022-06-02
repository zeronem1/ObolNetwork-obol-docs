"use strict";(self.webpackChunkobol_docs=self.webpackChunkobol_docs||[]).push([[8869],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=d(n),p=i,m=f["".concat(l,".").concat(p)]||f[p]||u[p]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3438:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={description:"Documenting a Distributed Validator Cluster in a standardised file format"},l="Cluster Configuration",d={unversionedId:"dv/distributed-validator-cluster-manifest",id:"version-v0.5.0/dv/distributed-validator-cluster-manifest",title:"Cluster Configuration",description:"Documenting a Distributed Validator Cluster in a standardised file format",source:"@site/versioned_docs/version-v0.5.0/dv/08_distributed-validator-cluster-manifest.md",sourceDirName:"dv",slug:"/dv/distributed-validator-cluster-manifest",permalink:"/docs/dv/distributed-validator-cluster-manifest",draft:!1,editUrl:"https://github.com/obolnetwork/obol-docs/edit/main/website/versioned_docs/version-v0.5.0/dv/08_distributed-validator-cluster-manifest.md",tags:[],version:"v0.5.0",sidebarPosition:8,frontMatter:{description:"Documenting a Distributed Validator Cluster in a standardised file format"},sidebar:"tutorialSidebar",previous:{title:"P2P interface",permalink:"/docs/dv/p2p-interface"},next:{title:"Charon CLI reference",permalink:"/docs/dv/charon_cli_reference"}},c={},u=[{value:"Cluster Configuration Files",id:"cluster-configuration-files",level:2}],f={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cluster-configuration"},"Cluster Configuration"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"These cluster definition and cluster lock files are a work in progress. The intention is for the files to be standardised for operating distributed validators via the ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/"},"EIP process")," when appropriate."))),(0,a.kt)("p",null,"This document describes the configuration options for running a charon client (or cluster) locally or in production."),(0,a.kt)("h2",{id:"cluster-configuration-files"},"Cluster Configuration Files"),(0,a.kt)("p",null,"A charon cluster is configured in two steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster_definition.json")," which defines the intended cluster configuration before keys have been created in a distributed key generation ceremony."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster.lock")," which includes and extends ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster_definition.json")," with distributed validator bls public key shares and verifiers.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charon create dkg")," command is used to create ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_definition.json")," file which is used as input to ",(0,a.kt)("inlineCode",{parentName:"p"},"charon dkg"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"charon create cluster")," command combines both steps into one and just outputs the final ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_lock.json")," without a DKG step."),(0,a.kt)("p",null,"The schema of the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_definition.json")," is defined as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1.0.0",                  // Schema version\n  "num_validators": 100,                // Number of validators to create in cluster.lock\n  "threshold": 3,                       // Optional threshold required for signature reconstruction\n  "uuid": "1234-abcdef-1234-abcdef",    // Random unique identifier\n  "name": "best cluster",               // Optional name field, cosmetic.\n  "fee_recipient_address":"0x123..abfc",// ETH1 fee_recipient address\n  "withdrawal_address": "0x123..abfc",  // ETH1 withdrawal address\n  "algorithm": "foo_dkg_v1" ,           // Optional DKG algorithm\n  "fork_version": "0x00112233",         // Fork version lock, enum of known values\n  "operators": [\n    {\n      "address": "0x123..abfc",         // ETH1 operator identify address\n      "enr": "enr://abcdef...12345",    // charon client ENR\n      "signature": "123456...abcdef",   // Signature of enr by ETH1 address priv key\n      "nonce": 1                        // Nonce of signature\n    }\n  ],\n  "definition_hash": "abcdef...abcedef",// Hash of above field (except free text)\n  "operator_signatures": [              // Operator signatures (seals) of definition hash\n    "123456...abcdef",\n    "123456...abcdef"\n  ]\n}\n')),(0,a.kt)("p",null,"The above ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_definition.json")," is provided as input to the DKG which generates keys and the ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_lock.json")," file."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster_lock.json")," has the following schema:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cluster_definition": {...},                              // Cluster definiition json, identical schema to above,\n  "distributed_validators": [                               // Length equaled to num_validators.\n    {\n      "distributed_public_key":  "0x123..abfc",             // DV root pubkey\n      "threshold_verifiers": [ "oA8Z...2XyT", "g1q...icu"], // length of threshold\n      "fee_recipient": "0x123..abfc"                        // Defaults to withdrawal address if not set, can be edited manually\n    }\n  ],\n  "lock_hash": "abcdef...abcedef",                          // Config_hash plus distributed_validators\n  "signature_aggregate": "abcdef...abcedef"                 // BLS aggregate signature of the lock hash signed by each DV pubkey.\n}\n')))}p.isMDXComponent=!0}}]);