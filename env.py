#!/usr/bin/python
import sys, os
from optparse import OptionParser
# simple python to learn GitHub
def rmdup(seq, rmitem=None):
   return ( x for x in set(seq) if  (rmitem == None or not rmitem in x) )
   
def env(removeMe=None, fromvar="PATH"):
	me  = os.getenv(fromvar)
	if me: me = os.pathsep.join(rmdup(me.split(os.pathsep), removeMe))
	return me

if __name__ == "__main__":
    usage =  "%prog [pattern [env]] | [pattern] [options] "
    description="Remove the [pattern] and duplicates from the path element containing the [pattern] [default: remove the duplicates only]"
    parser = OptionParser(usage=usage,description=description)
    path="PATH"
    pat = None
    parser.add_option("-p", "--pattern",dest="pattern",
	                 help=description,metavar="PATTERN")
    parser.add_option( "-e", "--env", dest="env"
	                  , help="The name of the env  variable to clean up [default: PATH]"
					  ,metavar="ENV")				 
    (options, args) = parser.parse_args()
    #check parameters
    if options.pattern and len(args)>0:
	parser.print_help()
	parser.error('-options -p and arg "pattern" are mutually exclusive')
    elif options.env and len(args)>1:
	parser.prunt_help()
        parser.error('-options -e and arg "env" are mutually exclusive')
    else:
	if  len(args)==2: path = args[1]
        elif options.env: path = options.env
	 
	if  len(args)>0:      pat = args[0]
        elif options.pattern: pat = options.pattern
	 
	clean = env(pat,path)
        if clean==None:
	    parser.error("no variable [%s] exists  to process"  % path)
        print clean		
