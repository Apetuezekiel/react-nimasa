// import Link from 'react-dom';
// import Link from 'react-router-dom';
import { Link } from 'react-router-dom';



function Arrival() {
	return (
		<div>
			<div className='app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header'>
				<div className='app-header header-shadow'>
					<div className='app-header__logo'>
						<div className='logo-src'></div>
						<div className='header__pane ml-auto'>
							<div>
								<button
									type='button'
									className='hamburger close-sidebar-btn hamburger--elastic'
									data-class='closed-sidebar'
								>
									<span className='hamburger-box'>
										<span className='hamburger-inner'></span>
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className='app-header__mobile-menu'>
						<div>
							<button
								type='button'
								className='hamburger hamburger--elastic mobile-toggle-nav'
							>
								<span className='hamburger-box'>
									<span className='hamburger-inner'></span>
								</span>
							</button>
						</div>
					</div>
					<div className='app-header__menu'>
						<span>
							<button
								type='button'
								className='btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav'
							>
								<span className='btn-icon-wrapper'>
									<i className='fa fa-ellipsis-v fa-w-6'></i>
								</span>
							</button>
						</span>
					</div>
					<div className='app-header__content'>
						<div className='app-header-left'></div>
						<Link to='exit.html'>
							<button className='btn btn-primary' type='submit' id='exitBtn'>
								Switch to Exits
							</button>
						</Link>
					</div>
					<div
						className='app-header__content font-weight-bold text-center'
						id='favour'
					>
						NIMASA FREIGHT DATA DASHBOARD
					</div>
					<div className='app-header-right'>
						<div className='header-btn-lg pr-0'>
							<div className='widget-content p-0'>
								<div className='widget-content-wrapper'>
									<div className='widget-content-left'>
										{/* <!-- ///////////SHOW PROFILE PICTURE OF WHO IS LOGGED IN///////// --> */}

										<div className='widget-content-left  ml-3 header-user-info'>
											<div className='nav-item mr-5 font-weight-bold'>
												{/* <!-- Download List:  --> */}
											</div>
											<span className='nav-item'>
												Start
												<input type='date' id='rangeStartDate' />
												End
												<input type='date' id='rangeEndDate' />
											</span>
											<button
												className='btn btn-primary mr-3'
												type='submit'
												id='fetchArrival'
											>
												Fetch
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='app-main'>
					<div className='app-sidebar sidebar-shadow'>
						<div className='app-header__logo'>
							<div className='logo-src'></div>
							<div className='header__pane ml-auto'>
								<div>
									<button
										type='button'
										className='hamburger close-sidebar-btn hamburger--elastic'
										data-class='closed-sidebar'
									>
										<span className='hamburger-box'>
											<span className='hamburger-inner'></span>
										</span>
									</button>
								</div>
							</div>
						</div>
						<div className='app-header__mobile-menu'>
							<div>
								<button
									type='button'
									className='hamburger hamburger--elastic mobile-toggle-nav'
								>
									<span className='hamburger-box'>
										<span className='hamburger-inner'></span>
									</span>
								</button>
							</div>
						</div>
						<div className='app-header__menu'>
							<span>
								<button
									type='button'
									className='btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav'
								>
									<span className='btn-icon-wrapper'>
										<i className='fa fa-ellipsis-v fa-w-6'></i>
									</span>
								</button>
							</span>
						</div>
						<div className='scrollbar-sidebar'>
							<div className='card-header-tab card-header-tab-animation card-header'>
								<div className='card-header-title'>
									<i className='header-icon lnr-apartment icon-gradient bg-love-kiss'>
										{' '}
									</i>
									Data Filter
								</div>
							</div>
							<div className='app-sidebar__inner'>
								<ul className='vertical-nav-menu'>
									<li className='app-sidebar__heading'>Category</li>
									<form className='needs-validation' noValidate>
										<div className='form-group'>
											<div className='form-check'>
												<button
													type='button'
													className='btn btn-primary'
													data-toggle='modal'
													data-target='#myModal'
													id='filterTypes'
												>
													Types
												</button>
											</div>
											<br />
											<div className='form-check'>
												<button type='button' className='btn btn-primary' disabled>
													GRT
												</button>
											</div>
										</div>
									</form>
									<li className='app-sidebar__heading mt-5'>Comply</li>
									<form className='needs-validation' noValidate>
										<div className='form-group'>
											<div className='form-check'>
												<button
													type='button'
													className='btn btn-primary'
													id='intVesselBtn'
													disabled
												>
													INT
												</button>
											</div>
											<br />
											<div className='form-check'>
												<button type='button' className='btn btn-primary' disabled>
													CAB
												</button>
											</div>
										</div>
									</form>
								</ul>
							</div>
						</div>
					</div>
					<div className='app-main__outer'>
						<div className='flexIt'>
							<img src='/assets/images/logo.png' className='mb-5' alt='' />
						</div>
						<div className='app-main__inner'>
							<div className='app-page-title'>
								<div className='page-title-wrapper'>
									<div className='page-title-heading'>
										<div className='text-center'>
											{' '}
											Vessel calls in the Nigerian Maritime Domain
										</div>
										<button
											className='btn btn-primary mr-3 ml-5'
											type='submit'
											id='refresh'
										>
											Refresh
										</button>
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12 col-lg-6'>
									<div className='mb-3 card'>
										<div className='card-header-tab card-header-tab-animation card-header flexEndToEnd'>
											<div className='card-header-title'>
												<i className='header-icon lnr-apartment icon-gradient bg-love-kiss'>
													{' '}
												</i>
												Call List
											</div>
											<div className='dropdown'>
												<button
													className='btn btn-primary dropdown-toggle'
													type='button'
													id='dropdownMenuButton'
													data-toggle='dropdown'
													aria-haspopup='true'
													aria-expanded='false'
												>
													Filter Types
												</button>
												<div
													className='dropdown-menu'
													aria-labelledby='dropdownMenuButton'
													id='vesselTypeDropDown'
												>
													<Link
														className='dropdown-item vesselTypes'
														id='showAllVesselTypes'
                                                        to="#"
													>
														Show all
													</Link>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-lg-12'>
												<div className='card'>
													<div className='card-body'>
														<div className='table-responsive'>
															<div className='submit-section jsfyLeft'></div>
															<h3 id='viewTitle'>full</h3>
															<br />
															<table
																id='loan'
																className='display table table-condensed responsive'
																style={{'width':'100%'}}
															></table>
															<table
																id='arrivalTable'
																className='display table table-condensed responsive'
																style={{'width':'100%'}}
															></table>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='col-md-12 col-lg-6'>
									<div className='mb-3 card'>
										<div className='card-header-tab card-header'>
											<div className='card-header-title'>
												<i className='header-icon lnr-rocket icon-gradient bg-tempting-azure'>
													{' '}
												</i>
												Map View
											</div>
											<div className='btn-actions-pane-right'></div>
										</div>
										<div className='tab-content'>
											<div className='tab-pane fade active show' id='tab-eg-55'>
												<div className='widget-chart p-3'>
													<div style={{'height':'350px'}}>
														<div id='maps'>
															<div id='mapArrival'></div>
															<div id='mapExit'></div>
														</div>
													</div>
													<div className='widget-chart-content text-center mt-5'>
														<div className='widget-description mt-0 text-warning'>
															<i className='fa fa-arrow-left'></i>
															<span className='text-muted opacity-8 pl-1'>
																Hover on markers to show name of Vessels
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='app-wrapper-footer'>
								<div className='app-footer'>
									<div className='app-footer__inner'>
										<div className='app-footer-left'>
											<ul className='nav'>
												<li className='nav-item mr-5 font-weight-bold'>
													Download View Data:
												</li>
											</ul>
										</div>
										<button
											className='btn btn-primary ml-5 btn-success'
											type='submit'
											id='exportArrival'
										>
											Export View
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- <script src="http://maps.google.com/maps/api/js?sensor=true"></script> --> */}
					</div>
				</div>
				<div className='container'>
					{/* <!-- <h2>Modal Example</h2> --> */}
					{/* <!-- Button to Open the Modal --> */}

					{/* <!-- The Modal --> */}
					<div className='modal' id='myModal'>
						<div className='modal-dialog'>
							<div className='modal-content'>
								<form action='' id='filterForm'>
									{/* <!-- Modal Header --> */}
									<div className='modal-header'>
										<h4 className='modal-title'>Choose Vessel Type(s)</h4>
										<button
											type='button'
											className='close'
											data-dismiss='modal'
										>
											&times;
										</button>
									</div>

									{/* <!-- Modal body --> */}
									<div className='modal-body' id='modal-body'>
										{/* <!-- LETTER A VESSEL TYPES --> */}
										<h2>A</h2>
										<input
											type='checkbox'
											id='acidTanker'
											name='acidTanker'
											value='Acid Tanker'
										/>
										<label htmlFor='acidTanker'> Acid Tanker</label>
										<br />
										<input
											type='checkbox'
											id='ahhft'
											name='ahhft'
											value='Anchor Handling fire fighting tug'
										/>
										<label htmlFor='ahhft'>
											{' '}
											Anchor Handling fire fighting tug
										</label>
										<br />
										<input
											type='checkbox'
											id='ahhfts'
											name='ahhfts'
											value='Anchor Handling fire fighting tug/supply'
										/>
										<label htmlFor='ahhfts'>
											{' '}
											Anchor Handling fire fighting tug/supply
										</label>
										<br />
										<input
											type='checkbox'
											id='ahst'
											name='ahst'
											value='Anchor Handling Salvage Tug'
										/>
										<label htmlFor='ahst'> Anchor Handling Salvage Tug</label>
										<br />
										<input
											type='checkbox'
											id='ahts'
											name='ahts'
											value='Anchor Handling Tug/Supply'
										/>
										<label htmlFor='ahts'> Anchor Handling Tug/Supply</label>
										<br />
										<input
											type='checkbox'
											id='asphT'
											name='asphT'
											value='Asphalt Tanker'
										/>
										<label htmlFor='asphT'> Asphalt Tanker</label>
										<br />

										<h2>B</h2>
										{/* <!-- LETTER B VESSEL TYPES --> */}
										<input
											type='checkbox'
											id='Barge'
											name='Barge'
											value='Barge'
										/>
										<label htmlFor='Barge'> Barge</label>
										<br />
										<input
											type='checkbox'
											id='bargeCarrier'
											name='bargeCarrier'
											value='Barge Carrier'
										/>
										<label htmlFor='bargeCarrier'> Barge Carrier</label>
										<br />
										<input
											type='checkbox'
											name='bargeContainerCarrier'
											value='Barge Container Carrier'
										/>
										<label htmlFor='bargeContainerCarrier'>
											Barge Container Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='BucketDredger'
											value='Bucket Dredger'
										/>
										<label htmlFor='BucketDredger'>Bucket Dredger</label>
										<br />
										<input
											type='checkbox'
											name='BulkAggregateCarrier'
											value='Bulk Aggregate Carrier'
										/>
										<label htmlFor='BulkAggregateCarrier'>
											Bulk Aggregate Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='BulkCarrier'
											value='Bulk Carrier'
										/>
										<label htmlFor='BulkCarrier'>Bulk Carrier</label>
										<br />
										<input
											type='checkbox'
											name='BulkCarrierwithContainerCapacity'
											value='Bulk Carrier with Container Capacity'
										/>
										<label htmlFor='BulkCarrierwithContainerCapacity'>
											Bulk Carrier with Container Capacity
										</label>
										<br />
										<input
											type='checkbox'
											name='BulkCementCarrier'
											value='Bulk Cement Carrier'
										/>
										<label htmlFor='BulkCementCarrier'>
											Bulk Cement Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='BulkOreCarrier'
											value='Bulk Ore Carrier'
										/>
										<label htmlFor='BulkOreCarrier'>Bulk Ore Carrier</label>
										<br />
										<input
											type='checkbox'
											name='BunkeringTanker'
											value='Bunkering Tanker'
										/>
										<label htmlFor='BunkeringTanker'>Bunkering Tanker</label>
										<br />
										<input type='checkbox' name='BuoyShip' value='Buoy Ship' />
										<label htmlFor='BuoyShip'>Buoy Ship</label>
										<br />
										<input
											type='checkbox'
											name='BuoyShip/Supply'
											value='Buoy Ship/Supply'
										/>
										<label htmlFor='BuoyShip/Supply'>Buoy Ship/Supply</label>
										<br />

										{/* <!-- LETTER C VESSEL TYPES --> */}
										<h2>C</h2>
										<input
											type='checkbox'
											name='CablePontoon'
											value='Cable Pontoon'
										/>
										<label htmlFor='CablePontoon'> Cable Pontoon</label>
										<br />
										<input
											type='checkbox'
											name='CableShip'
											value='Cable Ship'
										/>
										<label htmlFor='CableShip'> Cable Ship</label>
										<br />
										<input
											type='checkbox'
											name='Cargo/Training'
											value='Cargo/Training'
										/>
										<label htmlFor='Cargo/Training'> Cargo/Training</label>
										<br />
										<input
											type='checkbox'
											name='CatamaranTug'
											value='Catamaran Tug'
										/>
										<label htmlFor='CatamaranTug'> Catamaran Tug</label>
										<br />
										<input
											type='checkbox'
											name='ChemicalTanker'
											value='Chemical Tanker'
										/>
										<label htmlFor='ChemicalTanker'> Chemical Tanker</label>
										<br />
										<input
											type='checkbox'
											name='CombinedBulkandOilCarrier'
											value='Combined Bulk and Oil Carrier'
										/>
										<label htmlFor='CombinedBulkandOilCarrier'>
											{' '}
											Combined Bulk and Oil Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='CombinedChemicalandOilTanker'
											value='Combined Chemical and Oil Tanker'
										/>
										<label htmlFor='CombinedChemicalandOilTanker'>
											{' '}
											Combined Chemical and Oil Tanker
										</label>
										<br />
										<input
											type='checkbox'
											name='CombinedLNGandLPGGasCarrier'
											value='Combined LNG and LPG Gas Carrier'
										/>
										<label htmlFor='CombinedLNGandLPGGasCarrier'>
											{' '}
											Combined LNG and LPG Gas Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='CombinedOreandOilCarrier'
											value='Combined Ore and Oil Carrier'
										/>
										<label htmlFor='CombinedOreandOilCarrier'>
											{' '}
											Combined Ore and Oil Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='CompressedNaturalGasCarrier'
											value='Compressed Natural Gas Carrier'
										/>
										<label htmlFor='CompressedNaturalGasCarrier'>
											{' '}
											Compressed Natural Gas Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='CraneBarge'
											value='Crane Barge'
										/>
										<label htmlFor='CraneBarge'> Crane Barge</label>
										<br />
										<input
											type='checkbox'
											name='CraneShip'
											value='Crane Ship'
										/>
										<label htmlFor='CraneShip'> Crane Ship</label>
										<br />
										<input
											type='checkbox'
											name='CrudeOilTanker'
											value='Crude Oil Tanker'
										/>
										<label htmlFor='CrudeOilTanker'> Crude Oil Tanker</label>
										<br />
										<input
											type='checkbox'
											name='CutterSuctionDredger'
											value='Cutter Suction Dredger'
										/>
										<label htmlFor='CutterSuctionDredger'>
											{' '}
											Cutter Suction Dredger
										</label>
										<br />
										<input
											type='checkbox'
											name='CutterSuctionHopperDredger'
											value='Cutter Suction Hopper Dredger'
										/>
										<label htmlFor='CutterSuctionHopperDredger'>
											{' '}
											Cutter Suction Hopper Dredger
										</label>
										<br />

										{/* <!-- LETTER D VESSEL TYPES --> */}
										<h2>D</h2>
										<input
											type='checkbox'
											name='DepotShip'
											value='Depot Ship'
										/>
										<label htmlFor='DepotShip'> Depot Ship</label>
										<br />
										<input
											type='checkbox'
											name='DivingSupport'
											value='Diving Support'
										/>
										<label htmlFor='DivingSupport'> Diving Support</label>
										<br />
										<input type='checkbox' name='Dredger' value='Dredger' />
										<label htmlFor='Dredger'> Dredger</label>
										<br />
										<input
											type='checkbox'
											name='DredgerVessel(Unspecified)'
											value='Dredger Vessel (Unspecified)'
										/>
										<label htmlFor='DredgerVessel(Unspecified)'>
											{' '}
											DredgerVessel(Unspecified)
										</label>
										<br />
										<input
											type='checkbox'
											name='DrillPlatform'
											value='Drill Platform'
										/>
										<label htmlFor='DrillPlatform'> Drill Platform</label>
										<br />
										<input
											type='checkbox'
											name='DrillShip'
											value='Drill Ship'
										/>
										<label htmlFor='DrillShip'> Drill Ship</label>
										<br />

										{/* <!-- LETTER E VESSEL TYPES --> */}
										<h2>E</h2>
										<input
											type='checkbox'
											name='EdibleOilTanker'
											value='Edible Oil Tanker'
										/>
										<label htmlFor='EdibleOilTanker'> Edible Oil Tanker</label>
										<br />
										<input
											type='checkbox'
											name='ExhibitionShip'
											value='Exhibition Ship'
										/>
										<label htmlFor='ExhibitionShip'> Exhibition Ship</label>
										<br />

										{/* <!-- LETTER F VESSEL TYPES --> */}
										<h2>F</h2>
										<input type='checkbox' name='Ferry' value='Ferry' />
										<label htmlFor='Ferry'> Ferry</label>
										<br />
										<input
											type='checkbox'
											name='FireFightingTractorTug'
											value='Fire Fighting Tractor Tug'
										/>
										<label htmlFor='FireFightingTractorTug'>
											{' '}
											Fire Fighting Tractor Tug
										</label>
										<br />
										<input
											type='checkbox'
											name='FireFightingTug'
											value='Fire Fighting Tug'
										/>
										<label htmlFor='FireFightingTug'> Fire Fighting Tug</label>
										<br />
										<input
											type='checkbox'
											name='FireFightingTug/Supply'
											value='Fire Fighting Tug/Supply'
										/>
										<label htmlFor='FireFightingTug/Supply'>
											{' '}
											Fire Fighting Tug/Supply
										</label>
										<br />
										<input
											type='checkbox'
											name='FishCarrier'
											value='Fish Carrier'
										/>
										<label htmlFor='FishCarrier'> Fish Carrier</label>
										<br />
										<input
											type='checkbox'
											name='FishFactory'
											value='Fish Factory'
										/>
										<label htmlFor='FishFactory'> Fish Factory</label>
										<br />
										<input
											type='checkbox'
											name='FishOilTanker'
											value='Fish Oil Tanker'
										/>
										<label htmlFor='FishOilTanker'> Fish Oil Tanker</label>
										<br />
										<input
											type='checkbox'
											name='FisheryProtection'
											value='Fishery Protection'
										/>
										<label htmlFor='FisheryProtection'>
											{' '}
											Fishery Protection
										</label>
										<br />
										<input
											type='checkbox'
											name='Fishing(General)'
											value='Fishing (General)'
										/>
										<label htmlFor='Fishing(General)'> Fishing (General)</label>
										<br />
										<input
											type='checkbox'
											name='FloatingCrane'
											value='Floating Crane'
										/>
										<label htmlFor='FloatingCrane'> Floating Crane</label>
										<br />
										<input
											type='checkbox'
											name='FloatingDock'
											value='Floating Dock'
										/>
										<label htmlFor='FloatingDock'> Floating Dock</label>
										<br />
										<input
											type='checkbox'
											name='FloatingDrillingProductionTanker'
											value='Floating Drilling Production Tanker'
										/>
										<label htmlFor='FloatingDrillingProductionTanker'>
											{' '}
											Floating Drilling Production Tanker
										</label>
										<br />
										<input
											type='checkbox'
											name='FloatingGasProduction'
											value='Floating Gas Production'
										/>
										<label htmlFor='FloatingGasProduction'>
											{' '}
											Floating Gas Production
										</label>
										<br />
										<input
											type='checkbox'
											name='FloatingGasStorage'
											value='Floating Gas Storage'
										/>
										<label htmlFor='FloatingGasStorage'>
											{' '}
											Floating Gas Storage
										</label>
										<br />
										<input
											type='checkbox'
											name='FloatingLNGProductionandStorageFLNG'
											value='Floating LNG Production and Storage FLNG'
										/>
										<label htmlFor='FloatingLNGProductionandStorageFLNG'>
											{' '}
											Floating LNG Production and Storage FLNG
										</label>
										<br />
										<input
											type='checkbox'
											name='FloatingPowerStation'
											value='Floating Power Station'
										/>
										<label htmlFor='FloatingPowerStation'>
											{' '}
											Floating Power Station
										</label>
										<br />
										<input
											type='checkbox'
											name='FloatingProductionTanker'
											value='Floating Production Tanker'
										/>
										<label htmlFor='FloatingProductionTanker'>
											{' '}
											Floating Production Tanker
										</label>
										<br />
										<input
											type='checkbox'
											name='FloatingStorageTanker'
											value='Floating Storage Tanker'
										/>
										<label htmlFor='FloatingStorageTanker'>
											{' '}
											Floating Storage Tanker
										</label>
										<br />
										<input
											type='checkbox'
											name='FruitJuiceTanker'
											value='Fruit Juice Tanker'
										/>
										<label htmlFor='FruitJuiceTanker'>
											{' '}
											Fruit Juice Tanker
										</label>
										<br />
										<input
											type='checkbox'
											name='FullyCellularContainership'
											value='Fully Cellular Containership'
										/>
										<label htmlFor='FullyCellularContainership'>
											{' '}
											Fully Cellular Containershipr
										</label>
										<br />
										<input
											type='checkbox'
											name='FullyCellularRefridgerated'
											value='Fully Cellular Refridgerated'
										/>
										<label htmlFor='FullyCellularRefridgerated'>
											{' '}
											Fully Cellular Refridgerated
										</label>
										<br />

										{/* <!-- LETTER G VESSEL TYPES --> */}
										<h2>G</h2>
										<input
											type='checkbox'
											name='GeneralCargo'
											value='General Cargo'
										/>
										<label htmlFor='GeneralCargo'> General Cargo</label>
										<br />
										<input
											type='checkbox'
											name='GeneralCargowithConatinerCapacity'
											value='General Cargo with Conatiner Capacity'
										/>
										<label htmlFor='GeneralCargowithConatinerCapacity'>
											{' '}
											General Cargo with Conatiner Capacity
										</label>
										<br />
										<input
											type='checkbox'
											name='GrabDregder'
											value='Grab Dregder'
										/>
										<label htmlFor='GrabDregder'> Grab Dregder</label>
										<br />
										<input
											type='checkbox'
											name='GrabHopperDregder'
											value='Grab Hopper Dregder'
										/>
										<label htmlFor='GrabHopperDregder'>
											{' '}
											Grab Hopper Dregder
										</label>
										<br />

										{/* <!-- LETTER H VESSEL TYPES --> */}
										<h2>H</h2>
										<input
											type='checkbox'
											name='HopperBarge'
											value='Hopper Barge'
										/>
										<label htmlFor='HopperBarge'> Hopper Barge</label>
										<br />
										<input
											type='checkbox'
											name='HospitalShip'
											value='Hospital Ship'
										/>
										<label htmlFor='HospitalShip'> Hospital Ship</label>
										<br />
										<input type='checkbox' name='Hydrofoil' value='Hydrofoil' />
										<label htmlFor='Hydrofoil'> Hydrofoil</label>
										<br />
										<input
											type='checkbox'
											name='HydrographicResearch'
											value='Hydrographic Research'
										/>
										<label htmlFor='HydrographicResearch'>
											{' '}
											Hydrographic Research
										</label>
										<br />

										{/* <!-- LETTER I VESSEL TYPES --> */}
										<h2>I</h2>
										<input
											type='checkbox'
											name='Icebreaker'
											value='Icebreaker'
										/>
										<label htmlFor='Icebreaker'> Icebreaker</label>
										<br />
										<input
											type='checkbox'
											name='Icebreaker/ferry'
											value='Icebreaker/ferry'
										/>
										<label htmlFor='Icebreaker/ferry'> Icebreaker/ferry</label>
										<br />
										<input
											type='checkbox'
											name='Icebreaker/Supply'
											value='Icebreaker/Supply'
										/>
										<label htmlFor='Icebreaker/Supply'>
											{' '}
											Icebreaker/Supply
										</label>
										<br />
										<input
											type='checkbox'
											name='Icebreaker/Tender'
											value='Icebreaker/Tender'
										/>
										<label htmlFor='Icebreaker/Tender'>
											{' '}
											Icebreaker/Tender
										</label>
										<br />

										{/* <!-- LETTER L VESSEL TYPES --> */}
										<h2>L</h2>
										<input
											type='checkbox'
											name='LandingCraft'
											value='Landing Craft'
										/>
										<label htmlFor='LandingCraft'> Landing Craft</label>
										<br />
										<input
											type='checkbox'
											name='Lighthouse/Tender'
											value='Lighthouse/Tender'
										/>
										<label htmlFor='Lighthouse/Tender'>
											{' '}
											Lighthouse/Tender
										</label>
										<br />
										<input
											type='checkbox'
											name='LiquefiedNaturalGasCarrier(LNG)'
											value='Liquefied Natural Gas Carrier (LNG)'
										/>
										<label htmlFor='LiquefiedNaturalGasCarrier(LNG)'>
											{' '}
											Liquefied Natural Gas Carrier (LNG)
										</label>
										<br />
										<input
											type='checkbox'
											name='LiquefiedPetroleumGasCarrier(LPG)'
											value='Liquefied Petroleum Gas Carrier (LPG)'
										/>
										<label htmlFor='LiquefiedPetroleumGasCarrier(LPGLivestock'>
											{' '}
											Liquefied Petroleum Gas Carrier (LPG)
										</label>
										<br />
										<input type='checkbox' name='Livestock' value='Livestock' />
										<label htmlFor='Livestock'> Livestock</label>
										<br />
										<input
											type='checkbox'
											name='LNGBunkeringVessel'
											value='LNG Bunkering Vessel'
										/>
										<label htmlFor='LNGBunkeringVessel'>
											{' '}
											LNG Bunkering Vessel
										</label>
										<br />
										<input
											type='checkbox'
											name='LNGFloatingStorageRegasificationUnit'
											value='LNG Floating Storage Regasification Unit'
										/>
										<label htmlFor='LNGFloatingStorageRegasificationUnit'>
											{' '}
											LNG Floating Storage Regasification Unit
										</label>
										<br />

										{/* <!-- LETTER M VESSEL TYPES --> */}
										<h2>M</h2>
										<input
											type='checkbox'
											name='Maintenance'
											value='Maintenance'
										/>
										<label htmlFor='Maintenance'> Maintenance</label>
										<br />
										<input
											type='checkbox'
											name='MeteorologicalResearch'
											value='Meteorological Research'
										/>
										<label htmlFor='Mining Ship'>
											{' '}
											Meteorological Research
										</label>
										<br />
										<input
											type='checkbox'
											name='MiningShip'
											value='Mining Ship'
										/>
										<label htmlFor='MiningShip'> Mining Ship</label>
										<br />
										<input
											type='checkbox'
											name='MissionShip'
											value='Mission Ship'
										/>
										<label htmlFor='MissionShip'> Mission Ship</label>
										<br />
										<input
											type='checkbox'
											name='MolassesTanker'
											value='Molasses Tanker'
										/>
										<label htmlFor='MolassesTanker'> Molasses Tanker</label>
										<br />

										{/* <!-- LETTER N VESSEL TYPES --> */}
										<h2>N</h2>
										<input
											type='checkbox'
											name='NavalAuxiliaryVessel'
											value='Naval Auxiliary Vessel'
										/>
										<label htmlFor='NavalAuxiliaryVessel'>
											{' '}
											Naval Auxiliary Vessel
										</label>
										<br />
										<input
											type='checkbox'
											name='NavalVessel'
											value='Naval Vessel'
										/>
										<label htmlFor='NavalVessel'> Naval Vessel</label>
										<br />

										{/* <!-- LETTER O VESSEL TYPES --> */}
										<h2>O</h2>
										<input
											type='checkbox'
											name='OceanographicResearch'
											value='Oceanographic Research'
										/>
										<label htmlFor='OceanographicResearch'>
											{' '}
											Oceanographic Research
										</label>
										<br />
										<input
											type='checkbox'
											name='OffshoreSafety'
											value='Offshore Safety'
										/>
										<label htmlFor='OffshoreSafety'> Offshore Safety</label>
										<br />

										{/* <!-- LETTER P VESSEL TYPES --> */}
										<h2>P</h2>
										<input type='checkbox' name='Paddle' value='Paddle' />
										<label htmlFor='Paddle'> Paddle</label>
										<br />
										<input
											type='checkbox'
											name='Passenger(Cruise)'
											value='Passenger (Cruise)'
										/>
										<label htmlFor='Passenger(Cruise)'>
											{' '}
											Passenger (Cruise)
										</label>
										<br />
										<input
											type='checkbox'
											name='Passengerro/ro'
											value='Passenger ro/ro'
										/>
										<label htmlFor='Passengerro/ro'> Passenger ro/ro</label>
										<br />
										<input
											type='checkbox'
											name='PassengerVessel(Unspecified)'
											value='Passenger Vessel (Unspecified)'
										/>
										<label htmlFor='PassengerVessel(Unspecified)'>
											{' '}
											Passenger Vessel (Unspecified)
										</label>
										<br />
										<input
											type='checkbox'
											name='PatrolShip'
											value='Patrol Ship'
										/>
										<label htmlFor='PatrolShip'> Patrol Ship</label>
										<br />
										<input
											type='checkbox'
											name='PilotShip'
											value='Pilot Ship'
										/>
										<label htmlFor='PilotShip'> Pilot Ship</label>
										<br />
										<input
											type='checkbox'
											name='PipeCarrier'
											value='Pipe Carrier'
										/>
										<label htmlFor='PipeCarrier'> Pipe Carrier</label>
										<br />
										<input
											type='checkbox'
											name='PipeLayer'
											value='Pipe Layer'
										/>
										<label htmlFor='PipeLayer'> Pipe Layer</label>
										<br />
										<input
											type='checkbox'
											name='PollutionControlVessel'
											value='Pollution Control Vessel'
										/>
										<label htmlFor='PollutionControlVessel'>
											{' '}
											Pollution Control Vessel
										</label>
										<br />
										<input type='checkbox' name='Pontoon' value='Pontoon' />
										<label htmlFor='Pontoon'> Pontoon</label>
										<br />
										<input
											type='checkbox'
											name='ProductTanker'
											value='Product Tanker'
										/>
										<label htmlFor='ProductTanker'> Product Tanker</label>
										<br />
										<input
											type='checkbox'
											name='PusherTug'
											value='Pusher Tug'
										/>
										<label htmlFor='PusherTug'> Pusher Tug</label>
										<br />

										{/* <!-- LETTER R VESSEL TYPES --> */}
										<h2>R</h2>
										<input type='checkbox' name='Reefer' value='Reefer' />
										<label htmlFor='Reefer'> Reefer</label>
										<br />
										<input
											type='checkbox'
											name='RepairBarge'
											value='Repair Barge'
										/>
										<label htmlFor='RepairBarge'> Repair Barge</label>
										<br />
										<input
											type='checkbox'
											name='RepairShip'
											value='Repair Ship'
										/>
										<label htmlFor='RepairShip'> Repair Ship</label>
										<br />
										<input type='checkbox' name='Research' value='Research' />
										<label htmlFor='Research'> Research</label>
										<br />
										<input
											type='checkbox'
											name='Research/BuoyShip'
											value='Research/BuoyShip'
										/>
										<label htmlFor='Research/BuoyShip'>
											{' '}
											Research/BuoyShip
										</label>
										<br />
										<input
											type='checkbox'
											name='Research/SupplyShip'
											value='Research/Supply Ship'
										/>
										<label htmlFor='Research/SupplyShip'>
											{' '}
											Research/Supply Ship
										</label>
										<br />
										<input
											type='checkbox'
											name='Ro/roPontoon'
											value='Ro/ro Pontoon'
										/>
										<label htmlFor='Ro/roPontoon'> Ro/ro Pontoon</label>
										<br />
										<input
											type='checkbox'
											name='RollOnRollOff'
											value='Roll On Roll Off'
										/>
										<label htmlFor='RollOnRollOff'> Roll On Roll Off</label>
										<br />
										<input
											type='checkbox'
											name='RollOnRollOffwithContainerCapacity'
											value='Roll On Roll Off with Container Capacity'
										/>
										<label htmlFor='RollOnRollOffwithContainerCapacity'>
											{' '}
											Roll On Roll Off with Container Capacity
										</label>
										<br />

										{/* <!-- LETTER S VESSEL TYPES -->÷ */}
										<h2>S</h2>
										<input type='checkbox' name='Salvage' value='Salvage' />
										<label htmlFor='Salvage'> Salvage</label>
										<br />
										<input
											type='checkbox'
											name='SalvageTug'
											value='Salvage Tug'
										/>
										<label htmlFor='SalvageTug'> Salvage Tug</label>
										<br />
										<input
											type='checkbox'
											name='SandSuctionDredger'
											value='Sand Suction Dredger'
										/>
										<label htmlFor='SandSuctionDredger'>
											{' '}
											Sand Suction Dredger
										</label>
										<br />
										<input
											type='checkbox'
											name='SeismographicResearch'
											value='Seismographic Research'
										/>
										<label htmlFor='SeismographicResearch'>
											{' '}
											Seismographic Research
										</label>
										<br />
										<input
											type='checkbox'
											name='Semi-SubHLVessel'
											value='Semi-Sub HL Vessel'
										/>
										<label htmlFor='Semi-SubHLVessel'>
											{' '}
											Semi-Sub HL Vessel
										</label>
										<br />
										<input
											type='checkbox'
											name='Semi-SubHL/Tank'
											value='Semi-Sub HL/Tank'
										/>
										<label htmlFor='Semi-SubHL/Tank'> Semi-Sub HL/Tank</label>
										<br />
										<input
											type='checkbox'
											name='Semi-SubPontoon'
											value='Semi-Sub Pontoon'
										/>
										<label htmlFor='Semi-SubPontoon'> Semi-Sub Pontoon</label>
										<br />
										<input
											type='checkbox'
											name='SinglePointMooring'
											value='Single Point Mooring'
										/>
										<label htmlFor='SinglePointMooring'>
											{' '}
											Single Point Mooring
										</label>
										<br />
										<input
											type='checkbox'
											name='SludgeCarrier'
											value='Sludge Carrier'
										/>
										<label htmlFor='SludgeCarrier'> Sludge Carrier</label>
										<br />
										<input
											type='checkbox'
											name='StandbySafetyVessel'
											value='Standby Safety Vessel'
										/>
										<label htmlFor='StandbySafetyVessel'>
											{' '}
											Standby Safety Vessel
										</label>
										<br />
										<input
											type='checkbox'
											name='StorageBarge'
											value='Storage Barge'
										/>
										<label htmlFor='StorageBarge'> Storage Barge</label>
										<br />
										<input type='checkbox' name='StorageShip' value='tug' />
										<label htmlFor='StorageShip'> Tug</label>
										<br />
										<input type='checkbox' name='Submarine' value='Submarine' />
										<label htmlFor='Submarine'> Submarine</label>
										<br />
										<input
											type='checkbox'
											name='SuctionDredger'
											value='Suction Dredger'
										/>
										<label htmlFor='SuctionDredger'> Suction Dredger</label>
										<br />
										<input
											type='checkbox'
											name='SuctionHopperDredger'
											value='Suction Hopper Dredger'
										/>
										<label htmlFor='SuctionHopperDredger'>
											{' '}
											Suction Hopper Dredger
										</label>
										<br />
										<input type='checkbox' name='Supply' value='Supply' />
										<label htmlFor='Supply'> Supply</label>
										<br />
										<input type='checkbox' name='Support' value='Support' />
										<label htmlFor='Support'> Support</label>
										<br />

										{/* <!-- LETTER T VESSEL TYPES --> */}
										<h2>T</h2>
										<input
											type='checkbox'
											name='TankBarge'
											value='Tank Barge'
										/>
										<label htmlFor='TankBarge'> Tank Barge</label>
										<br />
										<input
											type='checkbox'
											name='TankCleaningShip'
											value='Tank Cleaning Ship'
										/>
										<label htmlFor='TankCleaningShip'>
											{' '}
											Tank Cleaning Ship
										</label>
										<br />
										<input
											type='checkbox'
											name='Tanker(Unspecified)'
											value='Tanker (Unspecified)'
										/>
										<label htmlFor='Tanker(Unspecified)'>
											{' '}
											Tanker (Unspecified)
										</label>
										<br />
										<input
											type='checkbox'
											name='TankerVehicleandContainerCarrier'
											value='Tanker Vehicle and Container Carrier'
										/>
										<label htmlFor='TankerVehicleandContainerCarrier'>
											{' '}
											Tanker Vehicle and Container Carrier
										</label>
										<br />
										<input
											type='checkbox'
											name='TankerwithRo/roforroadtankers'
											value='Tanker with Ro/ro for road tankers'
										/>
										<label htmlFor='TankerwithRo/roforroadtankers'>
											{' '}
											Tanker with Ro/ro for road tankers
										</label>
										<br />
										<input type='checkbox' name='Tender' value='Tender' />
										<label htmlFor='Tender'> Tender</label>
										<br />
										<input
											type='checkbox'
											name='TractorTug'
											value='Tractor Tug'
										/>
										<label htmlFor='TractorTug'> Tractor Tug</label>
										<br />
										<input
											type='checkbox'
											name='TrailingSuctionDredger'
											value='Trailing Suction Dredger'
										/>
										<label htmlFor='TrailingSuctionDredger'>
											{' '}
											Trailing Suction Dredger
										</label>
										<br />
										<input
											type='checkbox'
											name='TrailingSuctionHopperDredger'
											value='Trailing Suction Hopper Dredger'
										/>
										<label htmlFor='TrailingSuctionHopperDredger'>
											{' '}
											Trailing Suction Hopper Dredger
										</label>
										<br />
										<input type='checkbox' name='Training' value='Training' />
										<label htmlFor='Training'> Training</label>
										<br />
										<input
											type='checkbox'
											name='Trawler'
											value='Trawler (All types)'
										/>
										<label htmlFor='Trawler'> Trawler (All types)</label>
										<br />
										<input type='checkbox' name='tug' value='tug' />
										<label htmlFor='tug'> Tug</label>
										<br />
										<input
											type='checkbox'
											name='Tug/Icebreaker'
											value='Tug/Icebreaker'
										/>
										<label htmlFor='Tug/Icebreaker'> Tug/Icebreaker</label>
										<br />
										<input
											type='checkbox'
											name='Tug/PilotShip'
											value='Tug/Pilot Ship'
										/>
										<label htmlFor='Tug/PilotShip'> Tug/Pilot Ship</label>
										<br />
										<input
											type='checkbox'
											name='Tug/Supply'
											value='Tug/Supply'
										/>
										<label htmlFor='Tug/Supply'> Tug/Supply</label>
										<br />
										<input
											type='checkbox'
											name='Tug/Support'
											value='Tug/Support'
										/>
										<label htmlFor='Tug/Support'> Tug/Support</label>
										<br />
										<input
											type='checkbox'
											name='Tug/Tender'
											value='Tug/Tender'
										/>
										<label htmlFor='Tug/Tender'> Tug/Tender</label>
										<br />

										{/* <!-- LETTER T VESSEL TYPES --> */}
										<h2>T</h2>
										<input
											type='checkbox'
											name='VehicleCarrier'
											value='Vehicle Carrier'
										/>
										<label htmlFor='VehicleCarrier'> Vehicle Carrier</label>
										<br />
										<input
											type='checkbox'
											name='VesselType(Unspecified)'
											value='Vessel Type (Unspecified)'
										/>
										<label htmlFor='VesselType(Unspecified)'>
											{' '}
											Vessel Type (Unspecified)
										</label>
										<br />

										{/* <!-- LETTER W VESSEL TYPES --> */}
										<h2>W</h2>
										<input
											type='checkbox'
											name='WasteShip'
											value='Waste Ship'
										/>
										<label htmlFor='WasteShip'> Waste Ship</label>
										<br />
										<input
											type='checkbox'
											name='WaterTanker'
											value='Water Tanker'
										/>
										<label htmlFor='WaterTanker'> Water Tanker</label>
										<br />
										<input
											type='checkbox'
											name='Whalefactory'
											value='Whale factory'
										/>
										<label htmlFor='Whalefactory'> Whale factory</label>
										<br />
										<input type='checkbox' name='Whaler' value='Whaler' />
										<label htmlFor='Whaler'> Whaler</label>
										<br />
										<input
											type='checkbox'
											name='WineTanker'
											value='Wine Tanker'
										/>
										<label htmlFor='WineTanker'> Wine Tanker</label>
										<br />
										<input
											type='checkbox'
											name='Wood-ChipCarrier'
											value='Wood-Chip Carrier'
										/>
										<label htmlFor='Wood-ChipCarrier'> Wood-Chip Carrier</label>
										<br />
										<input type='checkbox' name='WorkShip' value='Work Ship' />
										<label htmlFor='WorkShip'> Work Ship</label>
										<br />

										{/* <!-- LETTER Y VESSEL TYPES --> */}
										<h2>Y</h2>
										<input type='checkbox' name='Yacht' value='Yacht' />
										<label htmlFor='Yacht'> Yacht</label>
										<br />
									</div>

									{/* <!-- Modal footer --> */}
									<div className='modal-footer'>
										<button className='btn btn-success' id='filterRecords'>
											Filter Records
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script type="text/javascript" src="./assets/scripts/main.js"></script>
			<script src="assets/js/jquery-3.2.1.min.js"></script>
		</div>
	);
}
export default Arrival;
