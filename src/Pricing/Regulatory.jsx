import { Info } from 'lucide-react'
import React from 'react'

const Regulatory = () => {

  const chargesData = [
    //Transition Charges
    {
      charge : 'Transaction Charges',
      icon : true,
      stockInvestments: {
        main : 'NSE: 0.00297%',
        sub : ['BSE: ₹2 Per The Stock Group'],
        tags: ['BUY', 'SELL']
      },
      intradayTrading: {
        main : 'NSE: 0.00297%',
        sub : ['BSE: ₹2 Per The Stock Group'],
        tags: ['BUY', 'SELL']
      },
      futures: {
         main: 'NSE: 0.00173%',
        sub: ['BSE: 0'],
        tags: ['BUY', 'SELL']
      },
      options: {
       main: 'NSE: 0.03503%',
        sub: ['BSE:', 'Sensex 50/Stock options 0.0050%', 'Sensex/Bankex options 0.0325%'],
        tags: ['BUY', 'SELL']
      }
    },
 
    //STT (Securities Transaction Tax)
    {
      charge: 'STT',
      icon: true,
      stockInvestments: {
        main: '0.1%',
        tags: ['BUY', 'SELL']
      },
       intradayTrading: {
        main: '0.025%',
        tags: ['SELL']
      },
       futures: {
        main: 'NSE: 0.02%',
        sub: ['BSE: 0.02%'],
        tags: ['SELL']
      },
      options: {
        main: 'NSE: 0.1%',
        sub: ['BSE: 0.1%'],
        tags: ['SELL']
      }
    },
    
    // IPFT
    {
      charge: 'IPFT',
      icon: true,
      stockInvestments: {
        main: 'NSE: 0.0001%',
        tags: ['BUY', 'SELL']
      },
      intradayTrading: {
        main: 'NSE: 0.0001%',
        tags: ['BUY', 'SELL']
      },
      futures: {
        main: 'NSE: 0.0001%',
        tags: ['BUY', 'SELL']
      },
      options: {
        main: 'NSE: 0.0005%',
        tags: ['BUY', 'SELL']
      }
    },
 
    //GST
     {
      charge: 'GST**',
      icon: true,
      stockInvestments: '18%',
      intradayTrading: '18%',
      futures: '18%',
      options: '18%'
    },
   
    //Stamp Duty Charges
    {
      charge: 'Stamp Duty Charges',
      icon: true,
      stockInvestments: {
        main: '0.015%',
        tags: ['BUY']
      },
      intradayTrading: {
        main: '0.003%',
        tags: ['BUY']
      },
      futures: {
        main: 'NSE: 0.002%',
        sub: ['BSE: 0.002%'],
        tags: ['BUY']
      },
      options: {
        main: 'NSE: 0.003%',
        sub: ['BSE: 0.003%'],
        tags: ['BUY']
      }
    },

 // SEBI Charges
    {
     charge: 'SEBI Charges',
     icon : true,
     stockInvestments: '₹ 10/ crore',
      intradayTrading: '₹ 10/ crore',
      futures: '₹ 10/ crore',
      options: '₹ 10/ crore'
    },

// Clearing Charges
     {
     charge: 'Clearing Charges',
     icon : true,
     stockInvestments: '₹0',
      intradayTrading: '₹0',
      futures: '₹0',
      options: '₹0'
    },
  ]

  return (
    <div className='min-h-screen bg-white px-4 md:px-16 py-10 rounded-lg'>
      <div className='text-start md:ml-20'>
        {/* Title */}
        <h2 className='text-3xl font-bold text-gray-800 mb-6'>Regulatory & Statutory Charges</h2>

        {/* Table */}
        <div className="border border-gray-300 overflow-x-auto rounded-lg">
          {/* Header Row */}
          <div className="grid grid-cols-5 border-b border-gray-300 bg-gray-50 min-w-max">
            <div className="p-4 border-r border-gray-300"></div>
            <div className="p-4 border-r border-gray-300">
              <h3 className='text-gray-500 font-normal text-normal'>Stock Investments</h3>
            </div>
            <div className="p-4 border-r border-gray-300">
              <h3 className='text-gray-500 font-normal text-normal '>Intraday Trading</h3>
            </div>
            <div className="p-4 border-r border-gray-300">
              <h3 className='text-gray-500 font-normal text-normal'>Futures</h3>
            </div>
            <div className="p-4">
              <h3 className='text-gray-500 font-normal text-normal'>Options</h3>
            </div>
          </div>

          {/* Data rows */}
          {chargesData.map((row, index) => (
            <div key={index} className='grid grid-cols-5 border-b border-gray-300 min-w-max'>
              {/* Charges Name */}
              <div className="p-4 border-r border-gray-300 bg-white">
                <div className="flex items-center gap-2">
                  <span className='text-gray-800 text-xl font-medium'>{row.charge}</span>
                  {row.icon && <Info className='w-4 h-4 text-gray-400'/>}
                </div>
              </div>

              {/* Stock Investments */}
              <div className="p-4 border-r border-gray-300 bg-white">
                {typeof row.stockInvestments === 'string' ? (
                  <p className='text-gray-800 text-xl'>{row.stockInvestments}</p>
                ) : (
                  <div className='text-sm'>
                    <p className='text-gray-800 mb-1 text-lg'>{row.stockInvestments.main}</p>
                    {row.stockInvestments.sub && row.stockInvestments.sub.map((item, i) => (
                      <p key={i} className='text-gray-700'>{item}</p>
                    ))}
                    {row.stockInvestments.tags && (
                      <div className='flex gap-1 mt-2'>
                        {row.stockInvestments.tags.map((tag, i) => (
                          <span className='px-2 py-0.5 bg-gray-100 text-gray-600  rounded border border-gray-300 text-xs' key={i}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Intraday trading */}
              <div className="p-4 border-r border-gray-300 bg-white">
                {typeof row.intradayTrading === 'string' ? (
                  <p className='text-gray-800 text-xl'>{row.intradayTrading}</p>
                ) : (
                  <div className="text-sm">
                    <p className='text-gray-800 mb-1 text-lg'>{row.intradayTrading.main}</p>
                    {row.intradayTrading.sub && row.intradayTrading.sub.map((item, i) => (
                      <p key={i} className='text-gray-700'>{item}</p>
                    ))}
                    {row.intradayTrading.tags && (
                      <div className='flex gap-1 mt-2'>
                        {row.intradayTrading.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded border border-gray-300">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Future */}
              <div className="p-4 border-r border-gray-300 bg-white">
                {typeof row.futures === 'string' ? (
                  <p className='text-gray-800 text-xl'>{row.futures}</p>
                ) : (
                  <div className="text-sm">
                    <p className='text-gray-800 mb-1 text-lg'>{row.futures.main}</p>
                    {row.futures.sub && row.futures.sub.map((item, i) => (
                      <p key={i} className='text-gray-700 '>{item}</p>
                    ))}
                    {row.futures.tags && (
                      <div className="flex gap-1 mt-2">
                        {row.futures.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded border border-gray-300">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* option */}
              <div className="p-4 bg-white">
                {typeof row.options === 'string' ? (
                  <p className="text-gray-800 text-xl">{row.options}</p>
                ) : (
                  <div className="text-sm">
                    <p className="text-gray-800 mb-1 text-lg">{row.options.main}</p>
                    {row.options.sub && row.options.sub.map((item, i) => (
                      <p key={i} className="text-gray-700 ">{item}</p>
                    ))}
                    {row.options.tags && (
                      <div className="flex gap-1 mt-2">
                        {row.options.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded border border-gray-300">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="items-center justify-center bg-gray-100 mt-15 mx-auto max-w-7xl md:ml-25 rounded-xl">
        <div className="items-center justify-center text-center p-5 ">
          <h1 className='text-4xl font-bold text-gray-800'>Start your investment journey with <span className='text-blue-500'>Angel</span><span className='text-orange-400'>One</span></h1>

          <p className='text-xl mt-5 font-normal text-gray-500'>Angel One provides you option to diversify your portfolio by investing in Stocks, Mutual Funds, ETFs, <br />US Stocks, Currencies, Commodities, Futures & Options, Bonds etc</p>

          <button className='bg-blue-500  mt-8 p-3 border border-gray-200 shadow-md rounded-lg text-xl font-semibold text-white hover:bg-blue-600'>Get Free Demat Account</button>
        </div>
      </div>
    </div>
  )
}

export default Regulatory