"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[507],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=d(a),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return a?n.createElement(h,l(l({ref:e},p),{},{components:a})):n.createElement(h,l({ref:e},p))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},23728:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={},s="Redshift",d={unversionedId:"integrations/destinations/redshift",id:"integrations/destinations/redshift",title:"Redshift",description:"This page guides you through the process of setting up the Redshift destination connector.",source:"@site/../docs/integrations/destinations/redshift.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/redshift",permalink:"/integrations/destinations/redshift",editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/redshift.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"RabbitMQ",permalink:"/integrations/destinations/rabbitmq"},next:{title:"Rockset",permalink:"/integrations/destinations/rockset"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Redshift",id:"step-1-set-up-redshift",level:2},{value:"Step 2: Set up the destination connector in Airbyte",id:"step-2-set-up-the-destination-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Connector-specific features &amp; highlights",id:"connector-specific-features--highlights",level:2},{value:"Notes about Redshift Naming Conventions",id:"notes-about-redshift-naming-conventions",level:3},{value:"Standard Identifiers",id:"standard-identifiers",level:4},{value:"Delimited Identifiers",id:"delimited-identifiers",level:4},{value:"Data Size Limitations",id:"data-size-limitations",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:m};function u(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"redshift"},"Redshift"),(0,i.kt)("p",null,"This page guides you through the process of setting up the Redshift destination connector."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"The Airbyte Redshift destination allows you to sync data to Redshift."),(0,i.kt)("p",null,"This Redshift destination connector has two replication strategies:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"INSERT: Replicates data via SQL INSERT queries. This is built on top of the destination-jdbc code base and is configured to rely on JDBC 4.2 standard drivers provided by Amazon via Mulesoft ",(0,i.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/com.amazon.redshift/redshift-jdbc42"},"here")," as described in Redshift documentation ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/redshift/latest/mgmt/jdbc20-install.html"},"here"),". ",(0,i.kt)("strong",{parentName:"li"},"Not recommended for production workloads as this does not scale well"),".")),(0,i.kt)("p",null,"For INSERT strategy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Host")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Port")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Username")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Schema")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Database"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This database needs to exist within the cluster provided.")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"COPY: Replicates data by first uploading data to an S3 bucket and issuing a COPY command. This is the recommended loading approach described by Redshift ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/redshift/latest/dg/c_loading-data-best-practices.html"},"best practices"),". Requires an S3 bucket and credentials.")),(0,i.kt)("p",null,"Airbyte automatically picks an approach depending on the given configuration - if S3 configuration is present, Airbyte will use the COPY strategy and vice versa."),(0,i.kt)("p",null,"For COPY strategy:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S3 Bucket Name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"this")," to create an S3 bucket."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S3 Bucket Region"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Place the S3 bucket and the Redshift cluster in the same region to save on networking costs."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Access Key Id"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys"},"this")," on how to generate an access key."),(0,i.kt)("li",{parentName:"ul"},"We recommend creating an Airbyte-specific user. This user will require ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html"},"read and write permissions")," to objects in the staging bucket."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secret Access Key"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Corresponding key to the above key id."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Part Size"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Affects the size limit of an individual Redshift table. Optional. Increase this if syncing tables larger than 100GB. Files are streamed to S3 in parts. This determines the size of each part, in MBs. As S3 has a limit of 10,000 parts per file, part size affects the table size. This is 10MB by default, resulting in a default table limit of 100GB. Note, a larger part size will result in larger memory requirements. A rule of thumb is to multiply the part size by 10 to get the memory requirement. Modify this with care.")))),(0,i.kt)("p",null,"Optional parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bucket Path"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The directory within the S3 bucket to place the staging data. For example, if you set this to ",(0,i.kt)("inlineCode",{parentName:"li"},"yourFavoriteSubdirectory"),", we will place the staging data inside ",(0,i.kt)("inlineCode",{parentName:"li"},"s3://yourBucket/yourFavoriteSubdirectory"),". If not provided, defaults to the root directory."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Purge Staging Data"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Whether to delete the staging files from S3 after completing the sync. Specifically, the connector will create CSV files named ",(0,i.kt)("inlineCode",{parentName:"li"},"bucketPath/namespace/streamName/syncDate_epochMillis_randomUuid.csv")," containing three columns (",(0,i.kt)("inlineCode",{parentName:"li"},"ab_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"emitted_at"),"). Normally these files are deleted after the ",(0,i.kt)("inlineCode",{parentName:"li"},"COPY")," command completes; if you want to keep them for other purposes, set ",(0,i.kt)("inlineCode",{parentName:"li"},"purge_staging_data")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".")))),(0,i.kt)("h2",{id:"step-1-set-up-redshift"},"Step 1: Set up Redshift"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/console/"},"Log in")," to AWS Management console.\nIf you don't have a AWS account already, you\u2019ll need to ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/"},"create")," one in order to use the API."),(0,i.kt)("li",{parentName:"ol"},"Go to the AWS Redshift service"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/ses/latest/dg/event-publishing-redshift-cluster.html"},"Create")," and activate AWS Redshift cluster if you don't have one ready"),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/cannot-connect-redshift-cluster/"},"Allow")," connections from Airbyte to your Redshift cluster ","(","if they exist in separate VPCs",")"),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html"},"Create")," a staging S3 bucket ","(","for the COPY strategy",")",".")),(0,i.kt)("h2",{id:"step-2-set-up-the-destination-connector-in-airbyte"},"Step 2: Set up the destination connector in Airbyte"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Destinations"),". In the top-right corner, click ",(0,i.kt)("strong",{parentName:"li"},"+ new destination"),"."),(0,i.kt)("li",{parentName:"ol"},"On the destination setup page, select ",(0,i.kt)("strong",{parentName:"li"},"Redshift")," from the Destination type dropdown and enter a name for this connector."),(0,i.kt)("li",{parentName:"ol"},"Fill in all the required fields to use the INSERT or COPY strategy"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Set up destination"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Airbyte OSS:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Destinations"),". In the top-right corner, click ",(0,i.kt)("strong",{parentName:"li"},"+ new destination"),"."),(0,i.kt)("li",{parentName:"ol"},"On the destination setup page, select ",(0,i.kt)("strong",{parentName:"li"},"Redshift")," from the Destination type dropdown and enter a name for this connector."),(0,i.kt)("li",{parentName:"ol"},"Fill in all the required fields to use the INSERT or COPY strategy"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Set up destination"),".")),(0,i.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,i.kt)("p",null,"The Redshift destination connector supports the following ",(0,i.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Full Refresh"),(0,i.kt)("li",{parentName:"ul"},"Incremental - Append Sync"),(0,i.kt)("li",{parentName:"ul"},"Incremental - Deduped History")),(0,i.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"Synchronization performance depends on the amount of data to be transferred.\nCluster scaling issues can be resolved directly using the cluster settings in the AWS Redshift console"),(0,i.kt)("h2",{id:"connector-specific-features--highlights"},"Connector-specific features & highlights"),(0,i.kt)("h3",{id:"notes-about-redshift-naming-conventions"},"Notes about Redshift Naming Conventions"),(0,i.kt)("p",null,"From ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_names.html"},"Redshift Names & Identifiers"),":"),(0,i.kt)("h4",{id:"standard-identifiers"},"Standard Identifiers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Begin with an ASCII single-byte alphabetic character or underscore character, or a UTF-8 multibyte character two to four bytes long."),(0,i.kt)("li",{parentName:"ul"},"Subsequent characters can be ASCII single-byte alphanumeric characters, underscores, or dollar signs, or UTF-8 multibyte characters two to four bytes long."),(0,i.kt)("li",{parentName:"ul"},"Be between 1 and 127 bytes in length, not including quotation marks for delimited identifiers."),(0,i.kt)("li",{parentName:"ul"},"Contain no quotation marks and no spaces.")),(0,i.kt)("h4",{id:"delimited-identifiers"},"Delimited Identifiers"),(0,i.kt)("p",null,"Delimited identifiers ","(","also known as quoted identifiers",")"," begin and end with double quotation marks ","(",'"',")",". If you use a delimited identifier, you must use the double quotation marks for every reference to that object. The identifier can contain any standard UTF-8 printable characters other than the double quotation mark itself. Therefore, you can create column or table names that include otherwise illegal characters, such as spaces or the percent symbol. ASCII letters in delimited identifiers are case-insensitive and are folded to lowercase. To use a double quotation mark in a string, you must precede it with another double quotation mark character."),(0,i.kt)("p",null,"Therefore, Airbyte Redshift destination will create tables and schemas using the Unquoted identifiers when possible or fallback to Quoted Identifiers if the names are containing special characters."),(0,i.kt)("h3",{id:"data-size-limitations"},"Data Size Limitations"),(0,i.kt)("p",null,"Redshift specifies a maximum limit of 65535 bytes to store the raw JSON record data. Thus, when a row is too big to fit, the Redshift destination fails to load such data and currently ignores that record.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/r_Character_types.html"},"docs")),(0,i.kt)("h3",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"All Redshift connections are encrypted using SSL"),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Each stream will be output into its own raw table in Redshift. Each table will contain 3 columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in Redshift is ",(0,i.kt)("inlineCode",{parentName:"li"},"VARCHAR"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in Redshift is ",(0,i.kt)("inlineCode",{parentName:"li"},"TIMESTAMP WITH TIME ZONE"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in Redshift is ",(0,i.kt)("inlineCode",{parentName:"li"},"VARCHAR")," but can be be parsed with JSON functions.")),(0,i.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Redshift Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"integer")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"varchar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"date/varchar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"date")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time/varchar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timestamptz/varchar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timestamp_with_timezone")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"varchar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"array")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"varchar")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"object")),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.32"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12085"},"12085")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed bug with switching between INSERT and COPY config")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.31"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-19"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12064"},"#","12064")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added option to support SUPER datatype in ",(0,i.kt)("em",{parentName:"td"},"airbyte_raw"),"** table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.29"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-04-05"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11729"},"11729")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed bug with dashes in schema name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.28"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-03-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11254"},"#","11254")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed missing records during S3 staging")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.27"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-25"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10421"},"10421")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Refactor JDBC parameters handling")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.25"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9920"},"#9920")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Updated the size of staging files for S3 staging. Also, added closure of S3 writers to staging files when data has been written to an staging file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.24"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.23"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-16"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8855"},"#","8855")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,i.kt)("inlineCode",{parentName:"td"},"purgeStagingData")," option to enable/disable deleting the staging data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.22"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-15"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8607"},"#8607")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accept a path for the staging data")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.21"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8562"},"#8562")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Moving classes around for better dependency management")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.20"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7719"},"#7719")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improve handling of wide rows by buffering records based on their byte size rather than their count")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.19"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7234"},"7234")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Allow SSL traffic only")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.17"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-12"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6965"},"6965")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Added SSL Support")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.16"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-11"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6949"},"6949")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Each stream was split into files of 10,000 records each for copying using S3 or GCS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.14"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-10-08"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5924"},"5924")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixed AWS S3 Staging COPY is writing records from different table in the same raw table")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.13"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-09-02"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5745"},"5745")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Disable STATUPDATE flag when using S3 staging to speed up performance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.12"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-21"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3555"},"3555")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enable partial checkpointing for halfway syncs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"0.3.11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"2021-07-20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4874"},"4874")),(0,i.kt)("td",{parentName:"tr",align:"left"},"allow ",(0,i.kt)("inlineCode",{parentName:"td"},"additionalProperties")," in connector spec")))))}u.isMDXComponent=!0}}]);